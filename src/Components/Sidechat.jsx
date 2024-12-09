import { Box, List, ListItem, Typography, Avatar, ListItemAvatar, ListItemText } from '@mui/material';

const ChatSidebar = ({ setSelectedChat }) => {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      text: 'hey!!',
      profilePicture: '../../public/4.jpg'
    },
    {
      id: 2,
      name: 'Camren Green',
      text: 'Ola! I am Camren',
      profilePicture: '../../public/1.jpg'
    },
    {
      id: 3,
      name: 'Charles Smith',
      text: 'The project deadline is near',
      profilePicture: '../../public/5.jpg'
    },
    {
      id: 4,
      name: 'Anna Smith',
      text: 'Hope to see you again!',
      profilePicture: '../../public/3.jpg'
    },
    {
      id: 5,
      name: 'Chris Hamesworth',
      text: "It's a pleasure meeting you 😊",
      profilePicture: '../../public/12.jpg'
    },
    {
      id: 6,
      name: 'Felecia John',
      text: '+91 1234567890',
      profilePicture: '../../public/11.jpg'
    },
    {
      id: 7,
      name: 'James Louis',
      text: '+91 1234567890',
      profilePicture: '../../public/8.jpg'
    },
    {
      id: 8,
      name: 'Ria Roy',
      text: '+91 1234567890',
      profilePicture: '../../public/7.jpg'
    },
    {
      id: 9,
      name: 'Mia Hales',
      text: '+91 1234567890',
      profilePicture: '../../public/9.webp'
    },
    {
      id: 10,
      name: 'Jenna Joy',
      text: '+91 1234567890',
      profilePicture: '../../public/10.jpg'
    },
    {
      id: 11,
      name: 'David Clark',
      text: '+91 1234567890',
      profilePicture: '../../public/6.jpg'
    },
  ];

  return (
    <Box sx={{ width: '300px', backgroundColor: '#F0F0F0', height: '100%', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Chats
      </Typography>
      <List>
        {contacts.map((contact) => (
          <ListItem 
            key={contact.id} 
            button 
            onClick={() => setSelectedChat(contact)} 
            sx={{ padding: '10px', cursor: 'pointer' }}
          >
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
  );
};

export default ChatSidebar;
