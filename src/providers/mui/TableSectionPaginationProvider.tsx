import TablePagination from '@mui/material/TablePagination';

const TableSectionPaginationProvider = (props: any) => {
  // TableSectionPagination is not a direct MUI component, but for completeness:
  return <TablePagination {...props} />;
};

export default TableSectionPaginationProvider;
