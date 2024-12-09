import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import { useState } from 'react';

const ChatArea = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Chat Header */}
      <Box sx={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
        <Typography variant="h5">{selectedChat || 'Select a chat to start messaging'}</Typography>
      </Box>

      {/* Message Area */}
      <Box sx={{ flex: 1, padding: '20px', overflowY: 'scroll', backgroundColor: '#F5F5F5' }}>
        {messages.map((message, index) => (
          <Paper key={index} sx={{ padding: '10px', marginBottom: '10px', width: '60%' }}>
            {message}
          </Paper>
        ))}
      </Box>

      {/* Input Area */}
      <Box sx={{ padding: '10px', backgroundColor: '#FFF', display: 'flex', alignItems: 'center' }}>
        <TextField 
          fullWidth 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type a message..." 
          sx={{ marginRight: '10px' }}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatArea;
