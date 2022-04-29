import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  return (
    <AppBar  position='static'>
        <Toolbar>
                <Grid container> 
                    <Grid item xs={4}>
                        <Typography variant="h4">
                                Practice
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography align="center"  variant="h6">
                                Tow Sides Of World
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align="right"  variant="h6">
                                Logout
                        </Typography>
                    </Grid>
                </Grid>
        </Toolbar>
    </AppBar>
    
  )
}

export default Navbar