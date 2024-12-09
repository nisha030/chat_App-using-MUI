import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MessageIcon from '@mui/icons-material/Message';

const GreenDotBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-dot': {
    backgroundColor: '#4caf50',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.background.paper}`,
  },
}));
// const notifications = [
//   {
//     icon: <EmojiEventsIcon style={{ color: "#7367F0" }} />,
//     message: 'Congratulations Lettie 🎉',
//     detail: 'Won the monthly best seller gold badge',
//     time: '1h ago',
//   },
//   {
//     icon: <CheckCircleIcon style={{ color: "#FF4560" }} />,
//     message: 'Charles Franklin',
//     detail: 'Accepted your connection',
//     time: '12hr ago',
//   },
//   {
//     icon: <MessageIcon style={{ color: "#00CFE8" }} />,
//     message: 'New Message',
//     detail: 'You have a new message from Natalie',
//     time: '1h ago',
//   },
//   {
//     icon: <ShoppingCartIcon style={{ color: "#28C76F" }} />,
//     message: 'New Order',
//     detail: 'ACME Inc. made new order $1,154',
//     time: '1 day ago',
//   },
// ];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.45),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100vw',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '83vw',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
 
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(7)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '96ch',
    },
  },
}));


const SearchBar = ({ toggleTheme, mode }) => {
  const [searchText, setSearchText] = useState('');
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [langAnchor, setlangAnchor] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [notifyAnchor, setNotifyAnchor] = useState(null);

  const handleNotifyMenuClick = (event) => {
    setNotifyAnchor(event.currentTarget);
  };
  const handleNotifyClose = () => {
    setNotifyAnchor(null);
  };



const langSelect = {
  color:'#7367f0',
  backgroundColor: '#e9e7fd', 

};

  const handleLangClick = (event) => {
    setlangAnchor(event.currentTarget);
  };
  const handlelangClose = () => {
    setlangAnchor(null);
  };
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    handleLanguageClose();
  };

  
  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };
  

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchText}
              onChange={handleSearchChange}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

            {/* language section  */}
            <IconButton color="inherit" onClick={handleLangClick}>
            <TranslateIcon
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              // onChange={handleLanguageSelect}
            >
              
            </TranslateIcon>
          </IconButton>

            <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={ handlelangClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                width: '200px'
              },
            }}
            
          >
              {['English', 'French', 'Arabic', 'German'].map((language) => (
              <MenuItem
                key={language}
                onClick={() => handleLanguageSelect(language)}
                sx={selectedLanguage === language ? langSelect : {}}
              >
                {language}
              </MenuItem>
            ))}
           
            
            
            </Menu>

              {/* mode section  */}

          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

                {/* shortcut section  */}

          <IconButton color="inherit">
            <DashboardCustomizeIcon />
          </IconButton>






                  {/* Notifications section  */}

                







             

           
                {/* avtar section  */}


          <IconButton color="inherit" onClick={handleMenuClick}>
            <GreenDotBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar src='/1.jpg' alt="Profile" />
            </GreenDotBadge>
          </IconButton>

          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {/* Avatar and User Info */}
            <MenuItem >
              <Box display="flex" alignItems="center" p={1}>
                <Avatar src="/1.jpg" alt="Profile" />
                <Box ml={2}>
                  <Typography variant="body1">Nisha Singh</Typography>
                  <Typography variant="body2" color="text.secondary">Admin</Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider />
            {/* Menu Items */}
            <MenuItem onClick={handleMenuClose} sx={{width:'250px'}}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <Typography variant="inherit">My Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Typography variant="inherit">Settings</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <RequestPageIcon />
              </ListItemIcon>
              <Typography variant="inherit">Billing</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <Typography variant="inherit">Pricing</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <QuestionMarkIcon />
              </ListItemIcon>
              <Typography variant="inherit">FAQ</Typography>
            </MenuItem>
            <Divider />
            {/* Logout Button */}
            <MenuItem>
              <Button
                onClick={() => {
                  handleMenuClose();
                  // Add your logout logic here
                  console.log('Logged out');
                }}
                endIcon={<LogoutIcon />}
                variant="contained"
                color="error"
                fullWidth
              >
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchBar;
