export type Page<T> = {
    total: number;
    more: boolean;
    data: T;
};
