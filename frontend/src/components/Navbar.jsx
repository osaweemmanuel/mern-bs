import React,{useState} from 'react'
import { AppBar,Toolbar,Tabs,Tab, Button,useMediaQuery,useTheme,Typography } from "@mui/material";
import DrawerCom from './DrawerCom';
import { NavLink } from 'react-router-dom';



const pages=[
    {
      id:1,
      text:'Home',
      path:'/index'
    },

    {
      id:2,
      text:'About',
      path: '/about'
    },

    {
      id:3,
      text:'Service',
      path:'/service'
    },

    {
      id:4,
      text:'Contact',
      path:'/contact'
    },

    {
      id:5,
      text:'Team Member',
      path:'/team'
    }
]

const Navbar=()=>{
    const [value,setValue]=useState()
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'))

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   
    console.log(isMatch)
    return (
    <>
        <AppBar sx={{backgroundColor:'#063970'}}>
            <Toolbar>
               

                 {isMatch ? (
                 
                 <>
                            <Typography sx={{fontSize:'1.5rem',paddingLeft:'10%'}}>
                              Shoppee
                           </Typography>
                           <DrawerCom/>
                          
                 </>) : (

                <>
                    <Tabs 
                    textColor="inherit" 
                    value={value} indicatorColor="secondary" onChange={handleChange}>
                          
                            {pages.map((page)=>(
                                // <Tab component={NavLink} to={page.path} label={page.text} key={page.id} />
                                <Tab key={page.id} label={page.text} component={NavLink} to={page.path}/>
                                   
                                
                            ))}
                    </Tabs>

                    <Button variant="contained" sx={{marginLeft:"auto"}} >login</Button>
                    <Button variant="contained" sx={{marginLeft:"10px"}}>SignUp</Button>
                </>
          
             )}





              
            </Toolbar>
           
        </AppBar>
        
      </>
    )
}

export default Navbar;