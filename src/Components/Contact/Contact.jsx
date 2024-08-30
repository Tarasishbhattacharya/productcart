import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import "./Contact.css"
const Contact = () => {
  return (
    <>
      <Box className="about">
      <Container maxWidth="lg">
      <Grid container spacing={2} >
      <Grid item xs={12} sm={4} md={6} lg={4}>
      <Card className='card'>
      <CardActionArea>
        <CardContent>
          {/* <DeliveryDiningIcon/> */}
          <BusinessIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Our Branch address
          </Typography>
          <Typography variant="body2" color="text.secondary">
           12,Park Street near metro station
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={4}  md={6} lg={4}>
      <Card className='card'>
      <CardActionArea>
        <CardContent>
          {/* <RestaurantIcon/> */}
          <EmailIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Email address
          </Typography>
          <Typography variant="body2" color="text.secondary">
            yourfood@support.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={4} md={6} lg={4}>
      <Card className='card'>
      <CardActionArea>
        <CardContent>
          {/* <CardGiftcardIcon/> */}
          <CallIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Contact us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            +918764432432
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      </Grid>
      </Container>
      </Box>
     <Box className="contact">
      <Container maxWidth="lg">
       <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
        <Box>
        <TextField type='text' label="Your name" variant='standard'/><br />
        <TextField type='email' label="Your email" variant='standard'/><br />
        <TextField type='number' label="Your number" variant='standard'/><br />
        <TextField type='text' label="Your message" variant='standard' rows={3}/><br /><br />
        <Button variant='contained'>Submit</Button>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card className='image'>
            <CardMedia
             component="img"
             image="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png"
            />
          </Card>
        </Grid>
       </Grid>
      </Container>
     </Box>
    </>
  )
}

export default Contact
