import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';


const contacts = [
    {
      id: 1,
      name: 'John Doe',
      message: "I will purchase it for sure. 👍",
      profilePicture: '../../public/4.jpg'
    },
    {
      id: 2,
      name: 'Camren green',
      text: 'Ola! I am Camren',
      profilePicture: '../../public/1.jpg'
    },
    {
      id: 3,
      name: 'Charles smith',
      text: 'The project deadline is near',
      profilePicture: '../../public/5.jpg'
    },
    {
      id: 4,
      name: 'Anna smith',
      text: 'Hope to see you again!',
      profilePicture: '../../public/3.jpg'
    },
    {
      id: 5,
      name: 'Chris hamesworth',
      text: "It's a pleasure meeting you 😊",
      profilePicture: '../../public/12.jpg'
    },
    {
      id: 6,
      name: 'Felecia john',
      message: "Let's catch up tomorrow!",
      profilePicture: '../../public/11.jpg'
    },
    {
      id: 7,
      name: 'James louis',
      message: "Let's catch up tomorrow!",
      profilePicture: '../../public/8.jpg'
    },
    {
      id: 8,
      name: 'Ria roy',
      message: "Let's catch up tomorrow!",
      profilePicture: '../../public/7.jpg'
    },
    {
      id: 9,
      name: 'Mia hales',
      message: "Let's catch up tomorrow!",
      profilePicture: '../../public/9.webp'
    },
    {
      id: 10,
      name: 'Jenna joy',
     message: "Let's catch up tomorrow!",
      profilePicture: '../../public/10.jpg'
    },
    {
      id: 11,
      name: 'David clark',
      message: "Let's catch up tomorrow!",
      profilePicture: '../../public/6.jpg'
    },
  
    // Add more contacts to the array
  ];

const ContactList = ( ) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(query);
    });
    setFilteredContacts(filteredContacts);
  };

  useEffect(() => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchQuery);
    });
    setFilteredContacts(filteredContacts);
  }, [searchQuery]);

  return (
    <Box>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 2, width:300 }}
      />
      <Box sx={{ maxHeight: '100vh', overflowY: 'auto', maxWidth: '30vw', position: 'fixed' }}>
        <List sx={{ cursor: 'pointer' }}>
          {filteredContacts.map((contact) => (
            <ListItem key={contact.id}>
              <ListItemAvatar>
                <Avatar src={contact.profilePicture} alt={contact.name} />
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={contact.text}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ContactList;