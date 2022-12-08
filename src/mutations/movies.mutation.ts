import { Movie } from '@app-types/movie';
import { useMutation } from '@tanstack/react-query';
import { internalApiInstance } from '@utils/api-request.util';

export type UpdateMovieData = {
    id: number;
    data: Partial<Movie>;
};

export const useCreateMovieMutation = () => {
    return useMutation<Record<string, any>, void, Partial<Movie>, void>({
        mutationFn: (movieDetails) => {
            return internalApiInstance.post('/movies', movieDetails);
        },
    });
};

export const useUpdateMovieMutation = () => {
    return useMutation<Record<string, any>, void, UpdateMovieData, void>({
        mutationFn: (updatedMovieDetails) => {
            return internalApiInstance.put(`/movies/${updatedMovieDetails.id}`, updatedMovieDetails.data);
        },
    });
};
