import React from 'react'
import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Collapse from '@mui/material/Collapse'; 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SearchBar from './ProductCompo/SearchBar';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const SideBar = () => {
    const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProductsClick = () => {
    setProductsOpen(!productsOpen);  
  };

  const handleItemClick = (item) => {  
    setActiveItem(item);
  };

  const getItemStyle = (item) => ({
    backgroundColor: activeItem === item ? '#978ef4' : 'transparent',
    color: activeItem === item ? '#fff' : 'black',
  });
  return (
    <>
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{background:'white'}}>
          <Toolbar   style={{color: 'black'}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                { mr: 2 },
                open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <SearchBar/>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            
            
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
            <DrawerHeader >
            <IconButton onClick={handleDrawerClose} >
              {theme.direction === 'ltr' ? <ChevronLeftIcon  /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Products'].map((text, index) => (
              <div key={text}>
                {/* Main Products list item */}
                <ListItem disablePadding>
                  <ListItemButton onClick={handleProductsClick}>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <RadioButtonUncheckedIcon style={{ fontSize: '12', color: 'black', marginLeft: '10' }} />
                      ) : null}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {productsOpen ? <ExpandLess sx={{ color: 'black' }} /> : <ExpandMore sx={{ color: 'black' }} />}
                  </ListItemButton>
                </ListItem>

                {/* Dropdown for Products */}
                <Collapse in={productsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {['Product List', 'Add Product', 'Category List'].map((subItem) => (
                      <ListItemButton
                        key={subItem}
                        sx={{ pl: 4 }}
                        onClick={() => handleItemClick(subItem)}
                        style={getItemStyle(subItem)}
                      >
                        <ListItemIcon>
                          <RadioButtonUncheckedIcon style={{ fontSize: '10', color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary={subItem} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          
        </Main>
      </Box>
    
    </>
  )
}

export default SideBar