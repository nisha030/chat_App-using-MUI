import React from 'react';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Contactsearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        borderRadius: '30px',
        width: '100%',
        height: '50px',
        border: '1px solid #ccc',
        // maxWidth: '400px',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        left:'-14%',
        marginBottom:'10px'
      }}
    >
      {/* Search Input */}
      <Box sx={{ display: 'flex', alignItems: 'center', width: '25vw', height: '70px', }}>
        <SearchIcon sx={{ color: '#a0a0a0', marginLeft: '10px', marginRight: '8px' }} />
        <InputBase
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          sx={{
            width: '100%',
            color: '#333',
            fontSize: '16px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Contactsearch;
