import React, { useState } from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChatSection from './ProductCompo/ChatSection';
import SearchBar from './ProductCompo/SearchBar';

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  width: '100vw',
}));

const App = () => {
  const [mode, setMode] = useState('light'); // Light or Dark Mode

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Define light and dark themes
  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'light' ? '#f0f0f0' : '#121212',
        paper: mode === 'light' ? '#fff' : '#1c1c1c',
      },
      primary: {
        main: mode === 'light' ? '#1976d2' : '#bb86fc',
      },
      text: {
        primary: mode === 'light' ? '#000' : '#fff',
        secondary: mode === 'light' ? '#555' : '#aaa',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar position="fixed" sx={{ background: theme.palette.background.paper }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div" color="text.primary">
              <SearchBar toggleTheme={toggleTheme} mode={mode} />
            </Typography>
          </Toolbar>
        </AppBar>
        <Main sx={{ marginTop: '64px' }}> {/* Added marginTop to avoid overlap with AppBar */}
          <Typography color="text.primary">
            <ChatSection />
          </Typography>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default App;
