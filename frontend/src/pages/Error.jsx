import React from 'react'
import { Container,Grid, Typography } from '@mui/material'

const Error = () => {
  return (
    <Container sx={{my:8}}>
        <Grid container spacing={2}>
           <Grid item sx={12} sm={6} md={12}>
              <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro id dicta debitis dolore aliquid obcaecati iure, commodi officia corporis culpa, reprehenderit amet exercitationem maiores sed. Suscipit nulla nam expedita maxime.</Typography>
           </Grid>

           <Grid item sx={12} sm={6} md={12}>
              <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro id dicta debitis dolore aliquid obcaecati iure, commodi officia corporis culpa, reprehenderit amet exercitationem maiores sed. Suscipit nulla nam expedita maxime.</Typography>
           </Grid>
        </Grid>
    </Container>
  )
}

export default Error
