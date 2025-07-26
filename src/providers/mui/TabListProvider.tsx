// ...existing code...
import TabList from '@mui/lab/TabList';

const TabListProvider = ({ children, ...props }: any) => {
  return (
    <TabList {...props}>{children}</TabList>
  );
};

export default TabListProvider;
