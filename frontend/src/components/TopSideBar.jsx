import React from 'react'
import React from 'react'
import { Outlet } from 'react-router-dom';
import {IconButton,Typography,Drawer,List,ListItem,ListItemIcon,Box,ListItemText,AppBar,Menu ,MenuItem,Divider ,Toolbar,Tooltip, Avatar} from '@mui/material';
import {AddCircleOutlineOutlined, SubjectOutlined,Logout} from "@mui/icons-material";
import { NavLink } from 'react-router-dom';

import {format} from 'date-fns'

const TopSideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
            
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
    </Box>
    </div>
  )
}

export default TopSideBar
