import TableBody from '@mui/material/TableBody';

const TableSectionBodyProvider = (props: any) => {
  // TableSectionBody is not a direct MUI component, but for completeness:
  return <TableBody {...props} />;
};

export default TableSectionBodyProvider;
