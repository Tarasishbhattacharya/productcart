import {  Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
         <Box sx={{backgroundColor:"black",color:"white", padding:"12px", width:"100%"}}>
         <Container maxWidth={"lg"}>
           <Grid container spacing={3} justifyContent={"space-between"}>
             <Grid item md={2} sm={2} xs={12} >
              <Typography variant='h6' gutterBottom>
                ProductShop
              </Typography>
             </Grid>
             <Grid item xs={12} sm={3} md={3}>
            <Typography variant="subtitle1"  gutterBottom className='footer_title'>
              PRODUCT
            </Typography>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>product drop</Link>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>Integrations</Link>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>Pricing</Link>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>FAQ</Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="subtitle1" className='footer_title' gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}} >About Us</Link>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>Careers</Link>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>Privacy Policy</Link>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>Terms of Service</Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="subtitle1" className='footer_title' gutterBottom>
              DEVELOPERS
            </Typography>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>Public API</Link>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>Documentation</Link>
            <Link href="#" color="inherit" display="block" style={{textDecoration:"none"}}>Guides</Link>
          </Grid>
           </Grid>
         </Container>
         </Box>
      
    </>
  )
}

export default Footer
