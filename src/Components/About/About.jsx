import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarsIcon from '@mui/icons-material/Stars';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import "./About.css"

const About = () => {
  return (
    <>
      <Typography variant='h2' sx={{margin:"20px auto",padding:"20px"}}>Get To Know Us</Typography>
      {/* <Typography variant='h3'sx={{margin:"20px",textDecoration:'underline'}}>
        Our Vision
      </Typography> */}
      <Box className="about">
      <Container maxWidth="lg">
      <Grid container spacing={2} >
      <Grid item xs={12} sm={4} md={6} lg={4}>
      <Card className='card'>
      <CardActionArea>
        <CardContent>
          <DeliveryDiningIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Quick Delivery
          </Typography>
          <Typography variant="body2" color="text.secondary">
           We tyry to deliver the items quick and on time
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={4}  md={6} lg={4}>
      <Card className='card'>
      <CardActionArea>
        <CardContent>
          <RestaurantIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Variety of foods
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We always deliver wildest variety of foods
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={4} md={6} lg={4}>
      <Card className='card'>
      <CardActionArea>
        <CardContent>
          <CardGiftcardIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Special Packaging
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We delivery the food with special packaging
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      </Grid>
      </Container>
      </Box>
      <Box className="about">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
           <Grid item xs={12} sm={4}  md={6} lg={4}>
           <Card className='card'>
      <CardActionArea>
        <CardContent>
          <PeopleAltIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Total users
          </Typography>
          <Typography variant="body2" color="text.secondary">
           20000+
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
           </Grid>
           <Grid item xs={12} sm={4}  md={6} lg={4}>
           <Card className='card'>
      <CardActionArea>
        <CardContent>
          <StarsIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Average Rating
          </Typography>
          <Typography variant="body2" color="text.secondary">
             4.8
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
           </Grid>
           <Grid item xs={12} sm={4}  md={6} lg={4}>
           <Card className='card'>
      <CardActionArea>
        <CardContent>
          <FastfoodIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Total orders delivered
          </Typography>
          <Typography variant="body2" color="text.secondary">
             40000+
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
           </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="image_card">
        <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}  md={8} lg={8}>
           <Card className='image'>
            <CardMedia

            component="img"
            alt="green iguana"
            image="https://static1.squarespace.com/static/53b839afe4b07ea978436183/53bbeeb2e4b095b6a428a13e/5fd2570b51740e23cce97919/1707265946869/traditional-food-around-the-world-Travlinmad.jpg?format=1500w"
             />
           </Card>
          </Grid>
          <Grid item xs={12} sm={12}  md={4} lg={4}>
            <Box className="content_card">
            <Typography variant='h5' className='text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BCContrary to popular </Typography>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Box>
      <Box className="image_card">
        <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}  md={8} lg={8}>
           <Card className='image'>
            <CardMedia

            component="img"
            alt="green iguana"
            image="https://chef-recruitment.net/wp-content/uploads/2023/02/CS-Banner-12.jpg"
             />
           </Card>
          </Grid>
          <Grid item xs={12} sm={12}  md={4} lg={4}>
            <Box className="content_card">
              <Typography variant='h5' className='text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BCContrary to popular</Typography>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <Card  style={{width:"90%",padding:"35px",margin:"45px auto"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quality food at Best price
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We try to keep our customer happy by delivering best food across the city
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} md={12}>
        <Card  style={{width:"90%",padding:"35px",margin:"45px auto"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        width="450"
        height="300"
        image="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Food with best chef
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We cook our food by best chef so that can deliver mouth watering dishes.
        </Typography>
      </CardContent>
    </Card>
        </Grid>
      </Grid> */}
    </>
  )
}

export default About
