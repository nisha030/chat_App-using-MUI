import React from 'react'
import ContactList from './Contactlist'
import ChatArea from './Messagelayout'
import { Box } from '@mui/material'


const App = () => {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between'}}>
    <ContactList  />
    <ChatArea/>
    </Box>
    </>  )
}

export default App