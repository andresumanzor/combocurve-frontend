import { useFormContext } from 'react-hook-form';

import { useMovies } from '@queries/movies.query';
import { convertMinutesToHour } from '@shared/helpers/strings';

import { ColumnsComponents, Table } from '../Table';

export const PAGE_SIZE = 10;

const CenteredContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <div className="flex justify-center">{children}</div>
);

const columnsData: ColumnsComponents[] = [
    {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ row }: any) => <span>{row.original.name}</span>,
        width: '50%',
    },
    {
        Header: () => (
            <CenteredContainer>
                <span>Rating</span>
            </CenteredContainer>
        ),
        accessor: 'ratings',
        Cell: ({ row }: any) => (
            <CenteredContainer>
                <span>{row.original.ratings}/100</span>
            </CenteredContainer>
        ),
        width: '15%',
    },
    {
        Header: () => (
            <CenteredContainer>
                <span>Duration</span>
            </CenteredContainer>
        ),
        accessor: 'durationInHours',
        Cell: ({ row }: any) => (
            <CenteredContainer>
                <span>{row.original.durationInHours}</span>
            </CenteredContainer>
        ),
        width: '25%',
    },
    {
        Header: '',
        accessor: 'id',
        Cell: ({ row }: any) => (
            <CenteredContainer>
                <a href={`/movies/${row.original.id}`}>
                    <span className="text-primary font-semibold">Edit</span>
                </a>
            </CenteredContainer>
        ),
        width: '10%',
    },
];

export const MoviesTable = () => {
    const { watch, setValue } = useFormContext();

    const watchSearch = watch('search');
    const watchPage = watch('page');

    const { data, isLoading } = useMovies({
        search: watchSearch,
        page: watchPage,
        pageSize: PAGE_SIZE,
    });

    const result = {
        ...data?.data,
        data: data?.data?.data?.movies,
    };

    return (
        <>
            {!isLoading && (
                <Table
                    columnsComponents={columnsData}
                    data={result}
                    currentPage={watchPage}
                    setCurrentPage={(newPage: number) => setValue('page', newPage)}
                    pageSize={PAGE_SIZE}
                />
            )}
        </>
    );
};
