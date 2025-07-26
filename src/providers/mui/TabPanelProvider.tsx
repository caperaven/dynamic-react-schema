// ...existing code...
import TabPanel from '@mui/lab/TabPanel';

const TabPanelProvider = ({ children, ...props }: any) => {
  return (
    <TabPanel {...props}>{children}</TabPanel>
  );
};

export default TabPanelProvider;
