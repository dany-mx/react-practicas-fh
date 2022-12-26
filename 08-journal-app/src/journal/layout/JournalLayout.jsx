import { Box, Toolbar } from '@mui/material';
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth="240" />
      <SideBar drawerWitdh="240" />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
