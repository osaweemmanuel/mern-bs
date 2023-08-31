import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import {IconButton,Typography,Drawer,List,ListItem,ListItemIcon,Box,ListItemText,AppBar,Menu ,MenuItem,Divider ,Toolbar,Tooltip, Avatar} from '@mui/material';
import 
{AddCircleOutlineOutlined, SubjectOutlined,Logout, Home, ArrowForwardIosOutlined}
 from "@mui/icons-material";
import {format} from 'date-fns'
import AttractionsIcon from '@mui/icons-material/Attractions';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';






const drawerWidth = 240;





const Layout=()=>{

  const menuItems=[
    {
      icon:<SubjectOutlined color="white"/>,
      text:"My note",
      path:"/notes"
    },

    {
      icon:<AddCircleOutlineOutlined color="white"/>,
      text:"Create",
      path:"/"
    },

    
  ]

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return(
    
    <Box sx={{display:'flex'}}>
          <AppBar position="fixed" style={{backgroundColor:'white', width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }} >
                <Toolbar>

                  <Typography variant="body2" style={{flexGrow:1,color:'black'}}>Today is {format(new Date(),'do MMMM Y')}</Typography>

                 


        <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
        
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        Paper={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /><br/>
          <Typography variant="body1" color="GrayText" marginLeft="6px" fontWeight="2px" component="div"> Osawe Emmanuel</Typography>
        </MenuItem>
        
        <Divider />
        
        
        
        
        
      
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        
        
        
        
      </Menu>



                </Toolbar>
            </AppBar>

         <Drawer sx={{width:drawerWidth,flexShrink: 0,'& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#063970',
            color:'white'
            
          },
        }}
        variant="permanent"
        anchor="left"
      >
         <div>
            <Typography variant="h6"  sx={{mx:3,my:3,color:'white',fontWeight:'bold',fontSize:"15px"}} component="div">
               Analytic Dashboard
            </Typography>
            <Typography variant="body2" component="div" sx={{mx:3,my:-3,color:'white'}} >Notebook</Typography>
         </div>

          <List sx={{my:8, fontSize:8}}>
              {menuItems.map((item)=>(
                   <ListItem key={item.text}>
                     <ListItemIcon sx={{color:'white'}}>{item.icon}</ListItemIcon>

                     <ListItemText>
                        <NavLink to={item.path} style={{textDecoration:'none',color:'white'}}>{item.text}</NavLink>
                     </ListItemText>
                 </ListItem>
              ))}

              <ListItem>
                <Home sx={{fontSize:'20px'}}/>
                <ListItemText>Home</ListItemText>
                <ListItemIcon sx={{color:'white',pl:'4px'}}><ArrowForwardIosOutlined sx={{marginLeft:6}}/></ListItemIcon>
              </ListItem>

              <ListItem>
                <AttractionsIcon sx={{fontSize:'20px'}}/>
                <ListItemText sx={{fontSize:'8px', pl:'4px'}}>
                  Sale hub</ListItemText>
                <ListItemIcon sx={{color:'white'}}><ArrowForwardIosOutlined sx={{marginLeft:6}}/></ListItemIcon>
              </ListItem>

              <ListItem sx={{}}>
                <DisplaySettingsIcon sx={{fontSize:'20px'}}/>
                <ListItemText sx={{fontSize:"6px",paddingLeft:"3px"}}>Talent management</ListItemText>
                <ListItemIcon sx={{color:'white'}}><ArrowForwardIosOutlined sx={{marginLeft:8}}/></ListItemIcon>
              </ListItem>

              <ListItem>
                <PoolRoundedIcon sx={{fontSize:'20px'}}/>
                <ListItemText sx={{fontSize:'4px',pl:'8px'}}>Spend management</ListItemText>
                <ListItemIcon sx={{color:'white'}}><ArrowForwardIosOutlined sx={{marginLeft:6}}/></ListItemIcon>
              </ListItem>

              
              <ListItem>
                <CreditCardOffOutlinedIcon sx={{fontSize:'20px'}}/>
                <ListItemText sx={{fontSize:'4px',pl:'8px'}}>Cards</ListItemText>
                <ListItemIcon sx={{color:'white'}}><ArrowForwardIosOutlined sx={{marginLeft:6}}/></ListItemIcon>
              </ListItem>

              <Divider sx={{mt:4}} />

              <ListItem>
                <DisplaySettingsIcon sx={{fontSize:'20px'}}/>
                <ListItemText sx={{fontSize:'4px',pl:'8px',color:'white'}}>
                  <NavLink  style={{color:'white',textDecoration:'none'}}>Leaderboards</NavLink></ListItemText>
                <ListItemIcon ><ArrowForwardIosOutlined sx={{marginLeft:6}}/></ListItemIcon>
              </ListItem>

              <ListItem>
                <SettingsOutlinedIcon sx={{fontSize:'20px'}}/>
                <ListItemText sx={{fontSize:'4px',pl:'8px'}}>Setting</ListItemText>
                <ListItemIcon sx={{color:'white'}}><ArrowForwardIosOutlined sx={{marginLeft:6}}/></ListItemIcon>
              </ListItem>
         </List> 

       

           
        </Drawer>


      <Box sx={{ my: 10 }}>
        
        <div style={{width:"100%",backgroundColor:'f9f9f8'}}>
          <Outlet/>
        </div>
        <Typography sx={{flewGrow:1,mt:8,textAlign:'center',color:'gray'}}> @copy;{format(new Date(),'Y')}</Typography>
      </Box>
       
    </Box>
  )
}

export default Layout;
