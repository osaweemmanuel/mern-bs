import React from 'react'
import Banner from '../assets/images/pexels-fauxels-3184338.jpg'
import { Link } from 'react-router-dom'
import '../styles/HomeStyles.css'
import { CardMedia, Container,Grid,Card, CardContent, Typography,CardActions,Button, Paper} from '@mui/material'


const Home = () => {
  return (
   <>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
         <div className="headerContainer">
            <h1>Mern Bs </h1>
            <p>Leading Best in West World</p>
            <Link to="/open-account">
               <button>Open Account</button>
            </Link>
         </div>

      </div>
      <Container>
           <Grid container spacing={3} sx={{mt:3}}>
           
              <Grid item xs={12} sm={9} md={8}   >
                <Typography>16 YEARS OF QUALITY SERVICE IN BANKING. We strive to deliver sustainable economic growth.</Typography>
              </Grid>

              <Grid item xs={12} sm={3} md={4} >
                <Button variant="secondary" sx={{bgcolor:'primary.main',color:''}}>Open Account</Button>
              </Grid>
         
           </Grid>








         <Grid container spacing={4} sx={{marginTop:3,marginBottom:3}}>
            <Grid item xs={12} md={4} lg={4}>
               <Card>
                  <CardMedia  component="img"
        height="194"
        image="https://www.us.hsbc.com/content/dam/hsbc/en/images/16-9/woman-eyes-closed.jpg/jcr:content/renditions/cq5dam.web.590.1000.jpeg"
        alt="Paella dish"/>
                  <CardContent>
                     <Typography variant="h6" component="div">
                        Financial Awareness
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                     A fresh, jargon-free approach to managing money to help you prepare for a healthier future.
                  </Typography>
                  </CardContent>

                 <CardActions>
                   <Button sx={{bgcolor:'primary.main',color:'white',fontSize:10}}>action</Button>
                 </CardActions>
               </Card>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
               <Card>
                  <CardMedia  component="img"
        height="194"
        image="https://www.us.hsbc.com/content/dam/hsbc/en/images/16-9/woman-eyes-closed.jpg/jcr:content/renditions/cq5dam.web.590.1000.jpeg"
        alt="Paella dish"/>
                  <CardContent>
                     <Typography variant="h6" component="div">
                        Sustainability
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                     By working together to support sustainable projects and initiatives, we can make real progress to protect our planet.
                  </Typography>
                  </CardContent>

                 <CardActions>
                   <Button sx={{bgcolor:'primary.main',color:'white',fontSize:10}}>action</Button>
                 </CardActions>
               </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
               <Card>
                  <CardMedia  component="img"
        height="194"
        image="https://www.us.hsbc.com/content/dam/hsbc/en/images/16-9/woman-eyes-closed.jpg/jcr:content/renditions/cq5dam.web.590.1000.jpeg"
        alt="Paella dish"/>
                  <CardContent>
                     <Typography variant="h6" component="div">
                        International Services 
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                     Explore HSBC Group's International Services to see how HSBC can help you on your international adventures.</Typography>
                  </CardContent>

                 <CardActions>
                   <Button sx={{bgcolor:"primary.main",color:"white",fontSize:10}}>action</Button>
                 </CardActions>
               </Card>
            </Grid>
         </Grid>
      </Container>
   </>
  )
}

export default Home
