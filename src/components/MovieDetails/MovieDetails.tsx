import { useState } from 'react';
import { useRouter } from 'next/router';
import { FormProvider, useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';

import { Movie } from '@app-types/movie';
import { internalApiInstance } from '@utils/api-request.util';
import { MovieDetail } from '@app-schemas/movie';

import { BasicInformation } from './BasicInformation';
import { Spinner } from '@components/Spinner';
import { useCreateMovieMutation, useUpdateMovieMutation } from 'mutations/movies.mutation';

type MovieDetailsProps = {
    id?: number;
    existingMovie?: boolean;
};

const emptyMovieData = new Movie({});

export const MovieDetails = ({ id: currentMovieId, existingMovie }: MovieDetailsProps) => {
    const [movieDetails, setMovieDetails] = useState<Movie | undefined>(undefined);

    const router = useRouter();
    const formMethods = useForm({
        defaultValues: { ...(emptyMovieData as FieldValues) },
        resolver: yupResolver(MovieDetail),
        mode: 'all'
    });

    const createMovieMutation = useCreateMovieMutation();
    const updateMovieMutation = useUpdateMovieMutation();

    const { isLoading } = useQuery({
        queryKey: ['movieData'],
        queryFn: async () => {
            const result = await internalApiInstance.get(`/movies/${currentMovieId}`);
            const receivedMovieData = result.data;
            formMethods.reset(receivedMovieData);
            setMovieDetails(result.data);

            return result.data;
        },
        enabled: Boolean(currentMovieId && !isNaN(currentMovieId) && !movieDetails),
    });

    if (isLoading && existingMovie) {
        return <Spinner />;
    }

    const onSubmit = async (data: Partial<Movie>) => {
        if (currentMovieId) {
            updateMovieMutation.mutate(
                {
                    id: currentMovieId,
                    data,
                },
                {
                    onSuccess: () => {
                        formMethods.reset(data);
                    },
                },
            );
        } else {
            createMovieMutation.mutate(data, {
                onSuccess: () => {
                    router.push('/movies');
                }
            });
        }
    };

    return (
        <div>
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <BasicInformation />
                </form>
            </FormProvider>
        </div>
    );
};
