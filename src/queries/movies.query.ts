import { FetchMoviesSearchParams } from '@pages/api/external-api/movies.api';
import { useQuery } from '@tanstack/react-query';
import { internalApiInstance } from '@utils/api-request.util';

export const useMovies = (searchParams: FetchMoviesSearchParams) => {
    return useQuery(['movies', searchParams], () => internalApiInstance.get('/movies', { params: searchParams }));
};
