import { NextPage } from 'next';

import { PageLayout } from '@components/PageLayout';
import { MovieDetails } from '@components/MovieDetails';

const EngineersEditPage: NextPage = () => {
    return (
        <PageLayout title="Creating Movie">
            <MovieDetails />
        </PageLayout>
    );
};

export default EngineersEditPage;
