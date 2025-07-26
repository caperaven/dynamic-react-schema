import TableCell from '@mui/material/TableCell';

const TableTitleProvider = (props: any) => {
  // TableTitle is not a direct MUI component, but for completeness:
  return <TableCell {...props} />;
};

export default TableTitleProvider;
