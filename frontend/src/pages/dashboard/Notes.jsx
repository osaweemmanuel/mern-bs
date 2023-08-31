import React,{useState,useEffect} from 'react'
import Notebook from '../../data/db.json'
import {CardContent, Card,CardHeader,IconButton, Container,Grid,Button,Box,Stack, Typography,Paper} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import NoteCard from '../../components/noteCard'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import CircleIcon from '@mui/icons-material/Circle';



const Notes=()=>{

   
      
    const [noter,setNoter]=useState([
            {
                "title":"Yoshi's birthday bash",
                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi consequuntur vero fuga doloremque deserunt et, expedita molestias dignissimos consequatur atque quia ducimus vitae eius maiores animi, officia natus magnam!",
                "category":"remainder",
                "id":1
            },
    
            {
                "title":"Complete my ninja training",
                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi consequuntur vero fuga doloremque deserunt et, expedita molestias dignissimos consequatur atque quia ducimus vitae eius maiores animi, officia natus magnam!",
                "category":"work",
                "id":2
            },
    
            {
                "title":"Order a Pizza",
                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi consequuntur vero fuga doloremque deserunt et, expedita molestias dignissimos consequatur atque quia ducimus vitae eius maiores animi, officia natus magnam!",
                "category":"todos"
            },

            {
                "title":"Order a Pizza",
                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi consequuntur vero fuga doloremque deserunt et, expedita molestias dignissimos consequatur atque quia ducimus vitae eius maiores animi, officia natus magnam!",
                "category":"todos"
            }
        ]
)

useEffect(() => {
    // Retrieve the data from localStorage on component mount
localStorage.getItem('noter') ? JSON.parse(localStorage.getItem('noter')) : null;
     if(noter){
        setNoter(noter)
     }

   
  }, []);


const handleDelete=(id)=>{
    const updateData=noter.filter((noters)=>noters.id !==id) ;
    setNoter(updateData)
    localStorage.setItem('noter', JSON.stringify(updateData));
   
   
}




{/* <Grid item key={id} id={id} xs={12} sm={6} md={3} lg={4}> */}

    return(
        <Container>
           
            {/* <Grid container spacing={2}>
                {noter.map(({id,...props})=>(
                     <Grid item key={id} id={id} xs={12} md={6} lg={4}>
                        <NoteCard {...props} handleDelete={handleDelete}/>
                     </Grid>
                ))}
            </Grid> */}

            <Grid container spacing={4}>
                {noter.map((note)=>(
                    <Grid item key={note.id} xs={12} md={6} lg={3}>
                        <NoteCard note={note} deleteHandler={(e,i)=>handleDelete(i)}/>
                    </Grid>
                ))}
            </Grid>
            
                {/* <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>  */}

             


           <Grid container spacing={3} sx={{my:4}}>
              <Grid item xs={12} md={6} sm={12} lg={3}>
                  <Card elevent={4} sx={{backgroundColor:'#063970',color:'white'}}>
                      <CardHeader 
                       avatar=""
                      
                      subheader={<Typography variant="body1" color="white">Wallet Balance'</Typography>}
                      title={<Typography variant="h6" component="h6" color="white">#500,000.00</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                          <VisibilityIcon />
                        </IconButton>
                      }
                     
                      
                      />
                      <CardContent sx={{bgColor:'white',marginRight:'4px'}}>
                         <Stack direction="row" spacing={2} size="small" fontSize="4px">
                         <Button size="small" variant="contained">Add Fund</Button>
                         <Button size="small" fontSize="4px" variant="contained">Withdraw</Button>
                         </Stack>
                      </CardContent>
                  </Card>
              </Grid>


              <Grid item xs={12} md={6} sm={12} lg={3} >
                  <Card elevent={4} sx={{}}>
                     
                        <CardHeader sx={{backgroundColor:'#E3F8FF'}}
                        avatar=""
                        title={<Typography variant="body1" color='#063970'  marginBottom="8px" component="div">Total savings balance</Typography>}
                        subheader={<Typography variant="h6" color='#063970' marginTop="4px" component="h4">#194,000</Typography>}
                        
                        />
                     
                      <CardContent sx={{bgColor:'white',marginRight:'4px'}}>
                   
                        <Button size="small" sx={{textTransform:"capitalize"}}>
                            View details
                            <KeyboardDoubleArrowRightOutlinedIcon/>
                        </Button>
                      </CardContent>
                  </Card>
              </Grid>

              <Grid item xs={12} md={6} sm={12} lg={3}>
                  <Card elevent={4} sx={{color:'#063970'}}>
                     
                        <CardHeader sx={{backgroundColor:"#E3F8FF",color:"#063970"}}
                        avatar=""
                        title={<Typography variant="body1"  marginBottom="8px" component="div">Total Customer</Typography>}
                        subheader={<Typography variant="h6"  marginTop="4px" component="h4">#919</Typography>}
                        
                        />
                     
                      <CardContent sx={{bgColor:'white',marginRight:'4px'}}>
                   
                        <Button size="small" sx={{textTransform:"capitalize"}}>
                            View details
                            <KeyboardDoubleArrowRightOutlinedIcon/>
                        </Button>
                      </CardContent>
                  </Card>
              </Grid>

              <Grid item xs={12} md={6} sm={12} lg={3}>
                  <Card elevent={4} sx={{}}>
                     
                        <CardHeader sx={{backgroundColor:"#E3F8FF"}}
                        avatar=""
                        title={<Typography variant="body1" color='#063970'  marginBottom="8px" component="div">Total POS</Typography>}
                        subheader={<Typography variant="h6" color='#063970' marginTop="4px" component="h4">0</Typography>}
                        
                        />
                     
                      <CardContent sx={{bgColor:'white',marginRight:'4px'}}>
                   
                        <Button size="small" sx={{textTransform:"capitalize"}}>
                            View details
                            <KeyboardDoubleArrowRightOutlinedIcon/>
                        </Button>
                      </CardContent>
                  </Card>
              </Grid>


              
              


           </Grid>

                        
                <Grid container spacing={2}>
                 <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body1" component="div">Total transfer</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>More</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                             <Typography sx={{}}>Today <b>#500</b></Typography>
                             <Typography sx={{}}>Yesterday <b>#200</b></Typography>
                           
                          </Box>

                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:6}}>
                             <Typography variant="body1" sx={{}}>This week <b>#500</b></Typography>
                             <Typography variant="body1" sx={{}}>Last week <b>#200</b></Typography>
                           
                          </Box>
                      </CardContent>
                  </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body1" component="div">Total inflow</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>More</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                          <Typography sx={{}}>Today <b>#2,000,000</b></Typography>
                         <Typography sx={{}}>Yesterday <b>#5,000,000</b></Typography>
                           
                          </Box>

                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:6}}>
                             <Typography variant="body1" sx={{}}>This week <b>#5,000,000</b></Typography>
                             <Typography variant="body1" sx={{}}>Last week <b>#2,000,000</b></Typography>
                           
                          </Box>
                      </CardContent>
                  </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body2" component="div">Total transactions</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>More</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                             <Typography sx={{}}>Today <b>#5,000,000</b></Typography>
                             <Typography sx={{}}>Yesterday <b>#2,000,000</b></Typography>
                           
                          </Box>

                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:6}}>
                             <Typography variant="body1" sx={{}}>This week <b>#5,000,000</b></Typography>
                             <Typography variant="body1" sx={{}}>Last week <b>#2,000,000</b></Typography>
                           
                          </Box>
                      </CardContent>
                  </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body2" component="div">Transaction count</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>Today</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                             <Typography sx={{}}>Today <b>#2,000,000</b></Typography>
                             <Typography sx={{}}>Yesterday <b>#5,000,000</b></Typography>
                           
                          </Box>

                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:6}}>
                             <Typography variant="body1" sx={{}}>This week <b>#5,000,000</b></Typography>
                             <Typography variant="body1" component="p" sx={{}}>Last week <b>#5,000,000</b></Typography>
                           
                          </Box>
                      </CardContent>
                  </Card>
      </Grid>

</Grid>


<Grid container spacing={2} sx={{mt:4}}>
                 <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body1" component="div">Total Cashout</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>Today</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                             <Typography variant="body2" sx={{}}>Today <b>#1,200,000</b></Typography>
                             <Typography variant="body2" sx={{}}>Yesterday <b>#1,200,000</b></Typography>
                           
                          </Box>

                      </CardContent>
                  </Card>
      </Grid>


      <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body2" component="div">Transaction Status</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>Today</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                         <Typography variant="body2" sx={{fontSize:'15px'}}>
                                <RadioButtonCheckedRoundedIcon sx={{mr:1,fontSize:'15px',color:'green'}}/>Successfull <b>422</b></Typography> 
                       
                             <Typography variant="body2" component="div">
                                <RadioButtonCheckedRoundedIcon sx={{ml:-2,fontSize:'15px',color:'red'}}/>
                                Failed <b>18</b></Typography>
                           
                          </Box>

                      </CardContent>
                  </Card>
      </Grid>






   
      <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body2" component="div">Average transaction 
                      cost</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" sx={{fontSize:'10px'}} size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>More</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                             <Typography variant="body2" component='div'>Value <b>#20,400</b></Typography>
                             <Typography variant="body2" component='div'>Count <b>422</b></Typography>
                           
                          </Box>

                         
                      </CardContent>
                  </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body2" component="div">Total Commission</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" sx={{fontSize:'10px'}} size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>Today</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                             <Typography variant="body3"  component='p'>POS commission <b>#20,400</b></Typography>
                             <Typography variant="body3" component='p'>Lotto commission <b>422</b></Typography>
                           
                          </Box>

                      </CardContent>
                  </Card>
      </Grid>
     
     
   
   

     
      <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{color:'#063970'}} >
                   
                      <CardHeader sx={{backgroundColor:'#E3F8FF',color:'#063970'}}
                       avatar=""
                    
                      title={<Typography variant="body2" component="p" sx={{fontSize:'10px',ml:1}}>Transaction commission per transaction</Typography>}
                      action={
                        <IconButton sx={{color:'white'}} aria-label="settings">
                            <Button  
                            variant="contained" sx={{fontSize:'10px'}} size="small" color="primary"
                            endIcon={<KeyboardArrowDownRoundedIcon/>}>Today</Button>
                        </IconButton>

                        
                      }
                     
                      
                      />
                      <CardContent sx={{backgroundColor:'#E3F8FF',color:'#063970'}}>
                          <Box sx={{display:'flex',flexWrap:'nowrap',gap:8,mb:3}}>
                             <Typography variant="body2" sx={{}} component='div'>POS commission <b>#500</b></Typography>
                             <Typography variant="body2" sx={{}} component='div'>Lotto commission <b>#200</b></Typography>
                           
                          </Box>

                         
                      </CardContent>
                  </Card>
      </Grid>


   
      <Grid item xs={12} md={6} lg={3}>
                    <Card elevent={4} sx={{backgroundColor:'#E3F8FF',color:'#063970'}} >
                         <div style={{marginTop:15,marginLeft:15,marginBottom:10}}>
                            <div style={{marginBottom:10}}>
                            <Typography>Transaction Comparative</Typography>
                            </div>
                        
                       
                            <div style={{marginBottom:20}}>
                                <Typography  sx={{margintLeft:15,fontSize:15}}>
                                    <CircleIcon sx={{fontSize:8,marginRight:1,color:'blue'}}/>Send money</Typography><span style={{fontWeight:'bold',fontSize:18}}>#105,000,000</span>
                                    <Typography>----------------------------------</Typography>
                            </div>

                            <div style={{display:'flex',flexDirection:'row',gap:20}}>
                                <div>
                                    <Typography sx={{fontSize:15}}><CircleIcon sx={{color:'yellow',fontSize:10,marginRight:1}}/>Cashout</Typography><span style={{fontWeight:'bold'}}>#12,000,000</span>
                                </div>
                                <div>
                                    <Typography variant="body1" component="div" sx={{fontSize:15}}><CircleIcon sx={{fontSize:10,color:'lightpurple',marginRight:1}}/>Utilities and Bills</Typography><span style={{fontWeight:'bold'}}>#4,200,000</span>
                                </div>
                             
                            </div>
                          
      
                            </div>
                        
                    </Card>
      </Grid>


</Grid>







        </Container>
    )
}

export default Notes

