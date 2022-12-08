const DEFAULT_PAGE_SIZE = 20;

export const parsePage = (page: number = 1, pageSize: number = DEFAULT_PAGE_SIZE) => {
    return {
        skip: (page - 1) * pageSize,
        take: pageSize,
    };
};
