import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { PageLayout } from '@components/PageLayout';
import { MovieDetails } from '@components/MovieDetails';

const MoviesEditPage: NextPage = () => {
    const router = useRouter();
    const { movieId } = router.query;

    return (
        <PageLayout title="Editing Movie">
            <MovieDetails existingMovie id={Number(movieId)} />
        </PageLayout>
    );
};

export default MoviesEditPage;
