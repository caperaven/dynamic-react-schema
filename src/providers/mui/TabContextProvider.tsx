// ...existing code...
import TabContext from '@mui/lab/TabContext';

const TabContextProvider = ({ children, ...props }: any) => {
  return (
    <TabContext {...props}>{children}</TabContext>
  );
};

export default TabContextProvider;
