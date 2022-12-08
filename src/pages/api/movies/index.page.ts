import { withApiRequestHandler } from '@shared/helpers/with-api-request-handler';
import { moviesApi } from '@pages/api/external-api/movies.api';

export default withApiRequestHandler({
    get: async (req, res) => {
        const { search, page, pageSize } = req.query;

        const searchParams = {
            search: search as string,
            page: parseInt(String(page ?? '1'), 10),
            pageSize: parseInt(String(pageSize ?? '10'), 10),
        };

        const result = await moviesApi.fetchMovies(searchParams);

        return res.status(200).json(result);
    },
    post: async (req, res) => {
        try {
            const movie = await moviesApi.createMovie(req.body);
            return res.status(200).json({ message: 'Movie created successfully', newMovie: movie });
        } catch (e) {
            return res.status(400).json({ message: 'Error creating movie' });
        }
    },
});
