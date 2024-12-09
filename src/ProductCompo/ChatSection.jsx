import React, { useState } from 'react';
import {  Grid2, Box, Avatar, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Contactsearch from './Contactsearch';
import MessageLayout from './MessageLayout';
import { useTheme } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function ChatSection() {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [chats, setChats] = useState([
    { id: 1, name: "Felecia Rower", message: "I will purchase it for sure. 👍", avatar: "/10.jpg" },
    { id: 2, name: "John Doe", message: "Let's catch up tomorrow!", avatar: "/2.webp" },
    { id: 3, name: "Anna Smith", message: "It's nice meeting you 😊", avatar: "/3.jpg" },
    { id: 4, name: "David Cannes", message: "It's nice meeting you 😊", avatar: "/4.jpg" },
    { id: 5, name: "Josh Rim", message: "It's nice meeting you 😊", avatar: "/5.jpg" },
    { id: 6, name: "Anas Singh", message: "It's nice meeting you 😊", avatar: "../../public/6.jpg" },
    { id: 7, name: "Kia Josefh", message: "It's nice meeting you 😊", avatar: "../../public/7.jpg" },
    { id: 8, name: "Chris Hamesworth", message: "It's nice meeting you 😊", avatar: "../../public/8.jpg" },
    { id: 9, name: "Loe Smith", message: "It's nice meeting you 😊", avatar: "../../public/9.webp" },
    { id: 10, name: "Ahana Sharma", message: "It's nice meeting you 😊", avatar: "../../public/10.jpg" },
    { id: 11, name: "jia Tim", message: "It's nice meeting you 😊", avatar: "../../public/11.jpg" },
    { id: 12, name: "Jake Sothe", message: "It's nice meeting you 😊", avatar: "../../public/12.jpg" },
  ]);
  
  const [openDialog, setOpenDialog] = useState(false); // Dialog state for adding a new contact
  const [newContact, setNewContact] = useState({ name: '', message: '', avatar: '' }); // New contact state

  const theme = useTheme();

  const handleChatClick = (chat) => {
    setSelectedChatId(chat.id);
    setSelectedChat(chat);
  };

  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  // Handle adding new contact at the bottom of the list
  const handleAddContact = () => {
    const newId = chats.length + 1; // Generate a new ID for the contact
    setChats([...chats, { ...newContact, id: newId }]); // Add the new contact to chats
    setNewContact({ name: '', message: '', avatar: '' }); // Reset form
    handleCloseDialog(); // Close the dialog
  };

  return (
    <Grid2 container sx={{ marginLeft: '5%' }}>
      <Grid2>
        <Contactsearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Grid2
          item
          xs={12}
          md={3}
          style={{
            backgroundColor: theme.palette.background.default,
            padding: '10px',
            overflowY: 'auto',
            width: '30%',
            height: '80vh',
            position: 'fixed',
            left: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>Chats</Typography>

            {/* Display filtered chats */}
            {filteredChats.map((chat) => (
              <Box
                key={chat.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  backgroundColor: selectedChatId === chat.id ? theme.palette.action.selected : '#ccc',
                  borderRadius: '10px',
                  mb: 2,
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onClick={() => handleChatClick(chat)}
              >
                <Box sx={{ position: 'relative' }}>
                  <Avatar src={chat.avatar} alt={chat.name} />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: 12,
                      height: 12,
                      backgroundColor: '#4caf50',
                      borderRadius: '50%',
                      border: '2px solid white',
                    }}
                  />
                </Box>
                <Box ml={2}>
                  <Typography variant="subtitle1">{chat.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{chat.message}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Button to add new contact, now positioned at the bottom */}
          <Button variant="contained" color="primary"  onClick={handleOpenDialog} sx={{ mb: 2, width:'50px', height:'50px', borderRadius:'25%',marginTop:'33%',marginLeft:'23%' , position:'fixed', zIndex:'999'}}>
           <PersonAddIcon/>
          </Button>
        </Grid2>
      </Grid2>

      <Grid2 item xs={12} md={9} style={{ padding: '10px', marginTop: '-9px', marginLeft: '1%' }}>
        {selectedChat ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, border: '1px solid #ccc', padding: '10px', width: '68vw', height: '70px', position: 'relative', marginLeft: '33%', marginTop: '-6%' }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar alt={selectedChat.name} src={selectedChat.avatar} />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 12,
                    height: 12,
                    backgroundColor: '#4caf50',
                    borderRadius: '50%',
                    border: '2px solid white',
                  }}
                />
              </Box>
              <Box ml={2}>
                <Typography variant="h6">{selectedChat.name}</Typography>
                <Typography variant="body2" color="textSecondary">NextJS developer</Typography>
              </Box>
            </Box>
            <MessageLayout chat={selectedChat} />
          </>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Typography variant="h6" color="textSecondary">Click on a chat to start a conversation</Typography>
          </Box>
        )}
      </Grid2>

      {/* Dialog for adding new contact */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Message"
            fullWidth
            value={newContact.message}
            onChange={(e) => setNewContact({ ...newContact, message: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Avatar URL"
            fullWidth
            value={newContact.avatar}
            onChange={(e) => setNewContact({ ...newContact, avatar: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">Cancel</Button>
          <Button onClick={handleAddContact} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </Grid2>
  );
}

export default ChatSection;
