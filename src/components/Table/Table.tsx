import { ReactNode } from 'react';

import TableInstance from './TableInstance';
import { Pagination } from '@components/Pagination';
import { Page } from '@app-types/page';
import { Spinner } from '@components/Spinner';

export type ColumnsComponents = {
    Header: string | (() => ReactNode);
    accessor: string;
    Cell: (row: any) => ReactNode;
    width: string | number;
};

type TableProps<T> = {
    data: Page<T[]>;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    columnsComponents: ColumnsComponents[];
    pageSize: number;
};

export const Table = <T,>({ data, currentPage, setCurrentPage, columnsComponents, pageSize }: TableProps<T>) => {
    const { more: canLoadMoreData, total: totalPossibleRows, data: tableData } = data;

    const handleClickPrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleClickNext = () => {
        setCurrentPage(currentPage + 1);
    };

    if (!tableData.length) {
        return (
            <div className="flex justify-center pt-[40px]">
                <span>No Results Found</span>
            </div>
        )
    }

    if (!tableData) {
        return (
            <Spinner />
        );
    }

    return (
        <>
            <TableInstance columnsData={columnsComponents} tableData={tableData} />
            <Pagination
                currentPage={currentPage}
                pageSize={pageSize}
                totalItems={totalPossibleRows}
                more={canLoadMoreData}
                handleClickPrevious={handleClickPrevious}
                handleClickNext={handleClickNext}
            />
        </>
    );
};
