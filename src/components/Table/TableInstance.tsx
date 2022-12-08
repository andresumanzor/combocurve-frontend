import { useMemo } from 'react';
import { useTable } from 'react-table';

import TableLayout from './TableLayout';

export default ({ columnsData, tableData }: any) => {
    const [columns, data] = useMemo(() => {
        return [columnsData, tableData];
    }, [tableData]);

    const tableInstance = useTable({ columns, data });

    return <TableLayout {...tableInstance} />;
};
