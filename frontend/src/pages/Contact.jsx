import React from 'react'
import { Container, Typography, Card,Grid, CardContent, CardMedia,Paper,CardActions,Button} from '@mui/material'

const Contact = () => {
  return (
    <Container>
          <Grid container spacing={2} sx={{my:8}}>
             <Grid item xs={12} sm={6} md={3}>
                  <Paper>
                      <Card>
                            <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                              
                                <Typography variant="h4" component="div">Lazard</Typography>
                              
                            </CardContent>
                      </Card>
                  </Paper>
             </Grid>

             <Grid item xs={12} sm={6} md={3}>
                   <Paper>
                      <Card>
                            <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                              
                                <Typography variant="h4" component="div">Lazard</Typography>
                              
                            </CardContent>
                      </Card>
                  </Paper>
             </Grid>

             <Grid item xs={12} sm={6} md={3}>
                   <Paper>
                      <Card>
                            <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                              
                                <Typography variant="h4" component="div">Lazard</Typography>
                              
                            </CardContent>
                      </Card>
                  </Paper>
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
                   <Paper>
                      <Card>
                            <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                              
                                <Typography variant="h4" component="div">Lazard</Typography>
                              
                            </CardContent>
                      </Card>
                  </Paper>
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
  )
}

export default Contact
