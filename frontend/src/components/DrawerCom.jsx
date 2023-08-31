import React,{useState} from 'react'
import { Drawer,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ListItem } from '@mui/material'
import { NavLink } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import MenuIcon from '@mui/icons-material/Menu';
import BlindsClosedIcon from '@mui/icons-material/BlindsClosed';








const pages=[

  {
    text:'Home',
    path:'/index',
    icon:<AppRegistrationIcon/>,
  },

  {
    text:"About us",
    path: '/about',
    icon:<AccountBalanceWalletIcon/>,
  },

  {
    text:'Contact Us',
    path:'/contact',
   icon:<BlindsClosedIcon/>,
  },

  {
    text:'Service',
    path:'/service',
    icon:<BatchPredictionIcon/>
  },


  
 ];

const DrawerCom = () => {
  const [isDrawerOpen,setIsDrawerOpen]=useState(false)
 
  return (
        <>

          <Drawer open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
                    
                    <List>
                      {pages.map((item)=>(
                            <ListItem key={item.text}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>
                                <NavLink to={item.path} style={{textDecoration:'none'}}>{item.text}</NavLink>
                            </ListItemText>
                        </ListItem>
                      ))}
                </List>
         </Drawer>

          <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=>setIsDrawerOpen(!isDrawerOpen)}>
                <MenuIcon />
         </IconButton>
        </>
  )
}

export default DrawerCom
