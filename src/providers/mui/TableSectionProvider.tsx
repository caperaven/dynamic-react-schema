import TableRow from '@mui/material/TableRow';

const TableSectionProvider = (props: any) => {
  // TableSection is not a direct MUI component, but for completeness:
  return <TableRow {...props} />;
};

export default TableSectionProvider;
