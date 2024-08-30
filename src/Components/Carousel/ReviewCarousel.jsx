import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Avatar, Card, CardActionArea, CardContent, Rating, Typography } from '@mui/material'
// import {FaChevronLeft, FaChevronRight} from 'react-icons'
import "./Carousel.css"
const ReviewCarousel = () => {
    // const [sliderRef, setSliderRef] = useState(null)
    const review_data=[
        {
            imgsrc:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719187200&semt=sph",
            review:"The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality",
            rating:"4"
        },
        {
            imgsrc:"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            review:"I and my friend had dinner here one of the nights we were in Kalpetta.",
            rating:"3.5"
        },
        {
            imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&s",
            review:"We visited this place for breakfast and dinner. The place is very great",
            rating:"4.5"
        },
        {
            imgsrc:"https://st3.depositphotos.com/1037987/15097/i/450/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg",
            review:"Awesome place and good hospitality. Staffs are very cooperative. Very easy to enter from Highway",
            rating:"3.8"
        },
        {
           imgsrc:"https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B",
           review:"Spotted this place on the way. Looks very neat. Limited car parking and good support staff.",
           rating:"4.2"
        }
    ]
    const sliderSettings = {
        dots:true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
               slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
               slidesToShow: 1,
              }
             }
          ]
      }
  return (
     <>
      <div className='content carousel'>
        <Slider {...sliderSettings} sx={{width:"40%"}}>
         {
            review_data.map((item)=>{
                return (
      <Card sx={{width:"20%"}}>
      <CardActionArea sx={{width:"40%",margin:"auto"}}>
        <Avatar src={item.imgsrc} sx={{width:"100px",height:"100px",borderRadius:"50%",margin:"auto"}}/>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.review}
          </Typography>
          <Rating name="half-rating" defaultValue={item.rating} precision={0.5} />
        </CardContent>
      </CardActionArea>
    </Card>
                )
            })
         }
        </Slider>
      </div>
    </>
  )
}

export default ReviewCarousel
