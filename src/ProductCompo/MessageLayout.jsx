import React, { useState, useEffect, useRef } from "react";
import { Box, TextField, IconButton, Typography, Paper, Avatar, useTheme } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const MessageLayout = ({ chat }) => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [image, setImage] = useState(null); // State to hold the selected image
  const senderAvatar = "/1.jpg"; // Static sender avatar
  const chatEndRef = useRef(null); // Reference for the end of chat messages

  // Scroll to the bottom of the chat
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Simulating the initial chat history
  useEffect(() => {
    if (chat) {
      const initialChatHistory = [
        { text: "Hey, how have you been?", type: "received", timestamp: "9:45 AM" },
        { text: "I’m good, how about you?", type: "sent", timestamp: "9:50 AM" },
        { text: "Doing well, thanks for asking!", type: "received", timestamp: "9:55 AM" },
        { text: "What's going on?", type: "received", timestamp: "9:56 AM" },
        { text: "Nothing, just developing my skills!", type: "sent", timestamp: "9:58 AM" },
        { text: "Great!", type: "received", timestamp: "10:05 AM" },
        { text: "What about you?", type: "sent", timestamp: "10:13 AM" },
        { text: "Right now I am working on a project", type: "received", timestamp: "10:13 AM" }
      ];
      setMessages(initialChatHistory);
      scrollToBottom(); // Scroll to the bottom after loading initial chat
    }
  }, [chat]);

  useEffect(() => {
    // Scroll to the bottom when messages change
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    // Send message if there's text or an image
    if (inputMessage.trim() || image) {
      const newMessage = {
        text: inputMessage.trim(), // Use trimmed text (will be empty if no text)
        type: "sent",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        image: image // Attach the image to the message
      };

      setMessages([...messages, newMessage]);
      setInputMessage(""); // Clear the input field after sending
      setImage(null); // Clear the image after sending
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image as a base64 data URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent the default "Enter" key behavior (form submission)
      if (inputMessage.trim() || image) {
        handleSendMessage(); // Send message only if text or image is present
      }
    } else if (e.key === 'Enter' && e.shiftKey) {
      // Allow Shift + Enter to add a new line
      setInputMessage(inputMessage + "\n");
    }
  };

  return (
    <Box
      sx={{
        height: "80vh",
        width: "70vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default,
        padding: "10px",
        position: 'fixed',
        marginTop: '-15px',
        marginLeft: '22%'
      }}
    >
      {/* Messages Area */}
      <Box
        sx={{
          flexGrow: 1,
          padding: "10px",
          overflowY: "auto",
          backgroundColor: theme.palette.mode === 'light' ? "#e5ddd5" : "#2e2e2e",
          borderRadius: "8px"
        }}
      >
        {chat ? (
          <>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: message.type === "sent" ? "flex-end" : "flex-start",
                  mb: 1,
                  gap: 1
                }}
              >
                {message.type === "received" && <Avatar src={chat.avatar} alt={chat.name} />}
                {message.type === "sent" && <Avatar src={senderAvatar} alt="Sender Avatar" />}

                <Paper
                  elevation={3}
                  sx={{
                    padding: "10px 15px",
                    backgroundColor: message.type === "sent" ? (theme.palette.mode === 'light' ? '#DCF8C6' : '#bb86fc') : theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    maxWidth: "60%",
                    borderRadius: "20px"
                  }}
                >
                  {/* Render image if present */}
                  {message.image && (
                    <img src={message.image} alt="Sent" style={{ maxWidth: "150px", height: "auto", borderRadius: "10px", marginBottom: '5px' }} />
                  )}
                  
                  {/* Render text with newlines if present */}
                  {message.text && (
                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: message.text.replace(/\n/g, "<br />")
                      }}
                    />
                  )}
                </Paper>
                <Typography variant="body2" color="textSecondary" align="right">
                  <DoneAllIcon sx={{ color: theme.palette.mode === 'light' ? 'blue' : '#bb86fc', fontSize: '15px', marginTop: '30px' }} />
                  {message.timestamp}
                </Typography>
              </Box>
            ))}
            {/* Invisible div to ensure scrolling to the bottom */}
            <div ref={chatEndRef} />
          </>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Typography variant="h6" color="textSecondary">Click on a chat to start a conversation</Typography>
          </Box>
        )}
      </Box>

      {/* Image Preview Area */}
      {image && (
        <Box sx={{ mb: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <img src={image} alt="Selected Preview" style={{ width: "60px", height: "auto", borderRadius: "10px" }} />
        </Box>
      )}

      {/* Message Input Area */}
      {chat && (
        <Box
          sx={{
            display: "flex",
            padding: "10px",
            borderTop: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            multiline // Enable multiline input
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: "30px",
              padding: "5px 15px",
              color: theme.palette.text.primary,
            }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }} // Hide the input
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <IconButton component="span" color="primary">
              <AddPhotoAlternateIcon sx={{ marginTop: '10px' }} />
            </IconButton>
          </label>
          <IconButton
            color="primary"
            onClick={handleSendMessage}
            sx={{ ml: 1 }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default MessageLayout;
