export default ({ getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }: any) => {
    return (
        <table {...getTableProps()} className="border-collapse w-full">
            <thead>
                {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <th
                                style={{ width: column.width }}
                                {...column.getHeaderProps()}
                                className="w-[450px] text-left py-[40px]"
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row: any) => {
                    prepareRow(row);
                    return (
                        <tr
                            {...row.getRowProps()}
                            className="border-y border-solid border-y-gray-300 border-x-backgroundColor"
                        >
                            {row.cells.map((cell: any) => {
                                return (
                                    <td {...cell.getCellProps()} className="py-[30px]">
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
