import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Avatar, Box, Card, CardActionArea, CardMedia, Container} from '@mui/material'
import "./Brandcarousel.css"
const BrandCarousel = () => {
    const brand_card=[
        {
            imgsrc:"https://mms.businesswire.com/media/20180927005162/en/680921/5/Burger_King_logo_emblem-2.jpg"
        },
        {
            imgsrc:"https://media.licdn.com/dms/image/C4D12AQHqHYCV-zxE5Q/article-inline_image-shrink_1500_2232/0/1577387956370?e=1724284800&v=beta&t=kzDqV36C9hFAPE1o3WtyAxyk0HVJ9wigEyGbj1lUeZU"
        },
        {
            imgsrc:"https://finshiksha.com/wp-content/uploads/2021/06/Dominos-Banner-Image-2-1.jpg"
        },
        {
            imgsrc:"https://mioamoreshop.com/cdn/shop/files/mio-amore-logo.png?height=628&pad_color=fff&v=1651228491&width=1200"
        },
        {
            imgsrc:"https://etimg.etb2bimg.com/photo/99316414.cms"
        },
        {
            imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQz_hDd3Vm7zg86wA89kh79FxLw9MPY0uxsqil7vWNHFI3GDs-UP0qIFPxEvBQGGqY-no&usqp=CAU",

        },
        {
            imgsrc:"https://media.licdn.com/dms/image/C4E0BAQGaU0BA2QPHmw/company-logo_200_200/0/1630646794927/aminiarestaurant_logo?e=2147483647&v=beta&t=bq62Xj-tpOsZBXgbeTYwJen6Dq2nYWosW4u7s28Wwk8"
        },
        {
            imgsrc:"https://images-platform.99static.com/xYZ4w1QsKxysRhaKc6J_uT_7um8=/318x0:1568x1250/500x500/top/smart/99designs-contests-attachments/75/75928/attachment_75928366"
        }
    ]
    const sliderSettings = {
        // width:"100%",
        // arrows:true,
        dots:true,
        autoplay:true,
       slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
      autoplaySpeed: 2000,
    // cssEase: "linear",
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
       <Box className="brand">
        <Container>
         <Slider {...sliderSettings}>
            {/* <Grid container spacing={2}> */}
           {
            brand_card.map((brand)=>{
                return (
                    <Avatar
                 className='image'   
              src={`${brand.imgsrc}`}
        />
                )
            })
           }
           {/* </Grid> */}
         </Slider>
         </Container>
       </Box>
    </>
  )
}

export default BrandCarousel
