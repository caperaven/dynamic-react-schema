import TableHead from '@mui/material/TableHead';

const TableSectionHeadProvider = (props: any) => {
  // TableSectionHead is not a direct MUI component, but for completeness:
  return <TableHead {...props} />;
};

export default TableSectionHeadProvider;
