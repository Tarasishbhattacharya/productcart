import React from 'react'
import Carousel from '../Carousel/Carousel'
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import ReviewCarousel from '../Carousel/ReviewCarousel'
import BrandCarousel from '../Carousel/BrandCarousel'
import Food from '../Food/Food'

const Home = () => {
  const cities_data=[
    {
      imgsrc:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/08/08155152/Untitled-design-6-1600x900.jpg",
      name:"Kolkata"
    },
    {
      imgsrc:"https://www.tripsavvy.com/thmb/QS7YoZPIIgBNklph1Cjeq3mDgUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-536116268-5b5d74e846e0fb0050adcf3b.jpg",
      name:"Bangalore"
    },
    {
      imgsrc :"https://media-cdn.tripadvisor.com/media/photo-m/1280/0f/98/f7/df/charminar.jpg",
      name:"Hyderabad"
    },
    {
      imgsrc:"https://media.istockphoto.com/id/1372538338/photo/traffic-flow-on-a-highway-with-nice-evening-sky-in-the-background.jpg?s=612x612&w=0&k=20&c=ekBzEOGRATas-IzqsJwxrB127z5BPNM19WJnzDnyYLo=",
      name:"Pune"
    },
    {
      imgsrc:"https://t3.ftcdn.net/jpg/02/54/58/20/360_F_254582082_kXuSkV48X1gLlecsoYegKW6ZDWJSvzcW.jpg",
      name:"Chennai"
    },
    {
      imgsrc:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Kochi-725765.jpg",
      name:"Kochi"
    }]

  
  return (
    <>
      <Carousel/>
      <Food/>
     <Typography variant='h4'>
       Services we offer
     </Typography>
     <Grid container spacing={3} style={{width:'90%',margin:" 15px auto"}}>
     <Grid item xs={12} md={4}>
     <Card>
      <CardActionArea>
        <CardMedia
        sx={{width:"100%",height:"250px"}}
          component="img"
          image="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Online delivery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            online delivery at doorstep
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </Grid>
     <Grid item xs={12} md={4}>
     <Card>
      <CardActionArea>
        <CardMedia 
        sx={{width:"100%",height:"250px"}}
          component="img"
          image="https://corpbiz.io/learning/wp-content/uploads/2020/11/License-for-Homemade-Food-Selling-in-India.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            License to deliver home food
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We offer home food License to ease your business 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </Grid>
     <Grid item xs={12} md={4}>
     <Card>
      <CardActionArea>
        <CardMedia
        sx={{width:"100%",height:"250px"}}
          component="img"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwvO-6QsRvqvNhJT3rj4dCCUAPc2KkKJ84A&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Membership offer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We deliver great membership offer
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </Grid>
     </Grid>
     <Typography variant='h4' gutterBottom>
      Cities we are located at
     </Typography>
     <Grid container spacing={3} style={{width:'90%',margin:" 15px auto"}}>
      {
        cities_data.map((city)=>{
          return (
            <Grid item xs={12} md={4}>
        <Card sx={{backgroundColor:"black",color:"white"}}>
      <CardActionArea>
        <CardMedia
        sx={{width:"100%",height:"250px"}}
          component="img"
          image={`${city.imgsrc}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {city.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
          )
        })
      }
     </Grid>
     {/* <Typography variant='h4' style={{margin:"40px 0"}}>
      The cuisines we offer 
     </Typography>
     <Container maxWidth="lg">
      <Grid container spacing={3}>
       {
        cuisine_data.map((cuisine)=>{
          return (
            <Grid item xs={12} md={4}>
        <Card>
      <CardActionArea>
        <CardMedia
        sx={{width:"100%",height:"250px"}}
          component="img"
          image={`${cuisine.imgsrc}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cuisine.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
          )
        })
       }
      </Grid>
     </Container> */}
     <Typography variant='h4' style={{margin:"40px 0"}}>
        Brands we are tie up with
    </Typography>
     <BrandCarousel/>
     <Typography variant='h4' style={{margin:"40px 0"}}>
        Our Happy customers Reviews
    </Typography>
     <ReviewCarousel/>
    </>
  )
}

export default Home
