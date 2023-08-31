import * as React from 'react';
import { Container,Box } from '@mui/material';
import SliderBanner from '../components/Slider/Slider.jsx'


const About=()=>{
  return(
    <div>
      <SliderBanner/>
   
    <Container sx={{my:8}}>
      
        <Box sx={{my:9,textAlign:
          'center',p:3}}>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore vel libero sed quas quidem, minima dignissimos laudantium doloribus, voluptatem aperiam sit esse, voluptate iure ex quod ullam ipsum laboriosam?
          </p>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore vel libero sed quas quidem, minima dignissimos laudantium doloribus, voluptatem aperiam sit esse, voluptate iure ex quod ullam ipsum laboriosam?
          </p>
        </Box>
    </Container>
  </div>
  )
}

export default About
