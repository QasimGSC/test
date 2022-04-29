import React from 'react'
import Grid from "@mui/material/Grid";
import {Box,Container } from '@mui/material';

const Body = () => {
  return (
      <Container >
            <Grid 
            container 
            > 
                <Box sx={{   }}>
                    <Grid item xs={4} sx={{ padding:5}} >
                           <img src='./images/3.jpeg'  width={600} height={600} />
                    </Grid > 
                </Box> 
                    <Grid item xs={4} sx={{ padding:5}}  >
                             <img src='./images/2.jpg' width={400} height={600} />
                    </Grid>
                     
            </Grid>
            </Container>
  )
}

export default Body