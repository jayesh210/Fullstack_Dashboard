import React from 'react'
import Highradiuslogo from '../image/logo.svg'
import Abc from '../image/Group.svg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Header = () => {
    
    return (
        <>
        <Box sx={{ flexGrow: 1,bgcolor:'grey' }}  style={{color:"#FFFFFF", backgroundColor:"#283D4A"}}>
      <Grid container spacing={2}>
        
        <Grid item xs={4} md={4} >
          <img  src={Abc}   alt="Logo" / >
        </Grid>
        <Grid item xs={8} md={8} style={{paddingLeft:'120px'}}>
         <img  src={Highradiuslogo}  alt="Logo" / >
        </Grid>
      </Grid>
      <div style={{paddingLeft:'50px'} }>
          <h2 style={{margin:'0px'}}>Invoice List </h2>
          </div>
    </Box>


                 
          
        </>
    )
}

export default Header

