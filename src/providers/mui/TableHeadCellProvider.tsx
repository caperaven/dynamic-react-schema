import TableCell from '@mui/material/TableCell';

const TableHeadCellProvider = (props: any) => {
  return <TableCell component="th" scope="col" {...props} />;
};

export default TableHeadCellProvider;
