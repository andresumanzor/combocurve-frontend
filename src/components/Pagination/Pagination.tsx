import { default as Image } from 'next/image';

import arrowLeft from '../../../public/assets/arrow-left.webp';
import arrowRight from '../../../public/assets/arrow-right.webp';

type PaginationProps = {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    more: boolean;
    handleClickPrevious: () => void;
    handleClickNext: () => void;
};

export const Pagination = ({
    currentPage,
    pageSize,
    totalItems,
    more,
    handleClickPrevious,
    handleClickNext,
}: PaginationProps) => {
    const canGoBack = !Boolean(currentPage - 1);
    const previousPage = currentPage - 1 || 1;

    let currentFromItem = pageSize * previousPage;

    if (canGoBack) {
        currentFromItem -= pageSize;
    } else {
        currentFromItem += 1;
    }

    let currentToItem = pageSize * currentPage;

    if (currentToItem > totalItems) {
        currentToItem = totalItems;
    }

    const controlButtonsClass =
        'inline-flex justify-around	items-center px-4 py-2 text-sm font-medium font-semibold text-black-600 bg-backgroundColor rounded-[5px] border border-solid border-paleGray';

    return (
        <div className="flex flex-row mt-[35px] justify-between">
            <span className="font-extralight self-center">
                Showing{' '}
                <span className="font-semibold text-black-600">
                    {currentFromItem} to {currentToItem} of {totalItems} results
                </span>
            </span>
            <div className="inline-flex">
                <button
                    disabled={canGoBack}
                    onClick={handleClickPrevious}
                    className={`${controlButtonsClass} w-[114px] h-[38px] cursor-pointer disabled:opacity-50`}
                >
                    <Image src={arrowLeft} alt="arrowLeft" style={{ alignSelf: 'center' }} />
                    Previous
                </button>
                <button
                    disabled={!more}
                    onClick={handleClickNext}
                    className={`${controlButtonsClass} ml-[20px] w-[87px] h-[38px] cursor-pointer disabled:opacity-50`}
                >
                    Next
                    <Image src={arrowRight} alt="arrowRight" style={{ alignSelf: 'center' }} />
                </button>
            </div>
        </div>
    );
};
