import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Grid2, Typography, Avatar, Badge } from '@mui/material';


const ChatArea = ( ) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch chat history from API or storage
    const chatHistory = [
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hello!', sender: 'John' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      { text: 'Hi! How are you?', sender: 'Jane' },
      // ...
    ];
    setMessages(chatHistory);
  }, []);

  const handleSendMessage = () => {
    // Add new message to chat history
    setMessages([...messages, { text: newMessage, sender: 'You' }]);
    setNewMessage('');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sx={{height:'85vh'}}>


        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={'../../public/1.jpg'} alt={"user"} />
      <Badge color="success" variant="dot" sx={{ marginTop:4 ,marginLeft: -1 }} />
      <Typography variant="h6" sx={{ marginLeft: 2 }}>
        {'kuvh'}
      </Typography>
      
    </Box>



          <Box sx={{ maxHeight:"75vh", overflowY: 'auto', mt:2 }}>
            {messages.map((message, index) => (
              <Typography key={index} variant="body1" sx={{ width:'74vw'}}>
                {message.sender}: {message.text}
              </Typography>
            ))}
          </Box>
        </Grid2>
      </Grid2>
        <Grid2 item xs={12} display={'flex'} sx={{width:'76vw'}}>
          <TextField
            label="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            fullWidth
          />
        <Grid2 item xs={12}>
          <Button variant="contained" onClick={handleSendMessage} sx={{background:'teal', padding:'5px 25px 5px 25px', height:'50px'}}>
            Send
          </Button>
        </Grid2>
        </Grid2>
    </Box>
  );
};

export default ChatArea;