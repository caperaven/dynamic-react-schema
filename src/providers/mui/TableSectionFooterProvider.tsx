import TableFooter from '@mui/material/TableFooter';

const TableSectionFooterProvider = (props: any) => {
  // TableSectionFooter is not a direct MUI component, but for completeness:
  return <TableFooter {...props} />;
};

export default TableSectionFooterProvider;
