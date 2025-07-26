import Tabs from '@mui/material/Tabs';

const TabsProvider = ({ children, ...props }: any) => {
  return <Tabs {...props}>{children}</Tabs>;
};

export default TabsProvider;
