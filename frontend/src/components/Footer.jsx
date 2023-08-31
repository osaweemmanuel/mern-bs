import React from 'react'
import { Typography,Container,Box } from '@mui/material'

const Footer = () => {
  return (
      <Box>
        <Typography variant="body2" sx={{bgcolor:'black',textAlign:'center',color:'white',width:'100%',height:'50px', marginBottom:4,p:3}}>
          All Rights Reserved &copy;{new Date().getFullYear()} Mern-bs</Typography>
      </Box>
  )
}

export default Footer
