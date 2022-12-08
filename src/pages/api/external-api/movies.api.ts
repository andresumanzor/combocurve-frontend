import { Movie, MovieForm } from '@app-types/movie';
import { Page } from '@app-types/page';
import { parsePage } from '@shared/util';
import { externalApiInstance } from '@utils/api-request.util';

export type FetchMoviesSearchParams = {
    search?: string;
    page: number;
    pageSize?: number;
};

export const moviesApi = {
    /**
     * Fetch movies
     * @param {FetchMoviesSearchParams}
     */
    async fetchMovies(receivedSearchParams: FetchMoviesSearchParams): Promise<Page<{ movies: Movie[] }>> {
        const { search, page, pageSize } = receivedSearchParams;
        const searchParams = new URLSearchParams();

        if (search) {
            searchParams.append('search', search?.toString());
        }

        const { skip, take } = parsePage(page, pageSize);
        searchParams.append('take', take.toString());
        if (skip > 0) {
            searchParams.append('skip', skip.toString());
        }

        const { data: response } = await externalApiInstance.get('/movies', { params: searchParams });

        return {
            total: response.total,
            more: response.more,
            data: {
                movies: response.data.movies.map((j: any) => new Movie(j)),
            },
        };
    },

    /**
     * Fetch movie
     * @param movieId
     */
    async fetchMovie(id: number): Promise<Movie> {
        const {
            data: { data },
        } = await externalApiInstance.get(`/movies/${id}`);
        return new Movie(data);
    },

    async createMovie(body: MovieForm): Promise<Movie> {
        const {
            data: { data },
        } = await externalApiInstance.post(`/movies/`, new Movie(body).serialize());
        return new Movie(data);
    },

    async updateMovie(body: MovieForm & { id: number }): Promise<Movie> {
        const {
            data: { data },
        } = await externalApiInstance.put(`/movies/${body.id}`, new Movie(body).serialize());
        return new Movie(data);
    },
};
