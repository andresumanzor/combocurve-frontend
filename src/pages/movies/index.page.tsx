import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { PageLayout } from '@components/PageLayout';
import { MoviesTable } from '@components/MoviesTable';
import { SearchInput } from '@components/SearchInput';

const MoviesPage: NextPage = () => {
    const formMethods = useForm({
        defaultValues: {
            search: '',
            page: 1,
        },
    });

    return (
        <PageLayout title="Movies">
            <div className="flex w-full justify-between">
                <div className="block">
                    <h1 className="font-bold text-4xl leading-none my-0">Movies</h1>
                </div>

                <a href="/movies/new" className="flex ml-auto">
                    <div className="flex flex-column self-center">
                        <button className="bg-primary hover:bg-green-600 border-none rounded-md px-6 py-2 font-sans">
                            <span className="text-lg font-semibold text-white">+ Add movie</span>
                        </button>
                    </div>
                </a>
            </div>

            <div className="mt-8">
                <FormProvider {...formMethods}>
                    <div className="flex justify-end">
                        <div className="w-1/3">
                            <SearchInput fieldName="search" placeholder="Start typing to search for movies..." />
                        </div>
                    </div>
                    <MoviesTable />
                </FormProvider>
            </div>
        </PageLayout>
    );
};

export default MoviesPage;
