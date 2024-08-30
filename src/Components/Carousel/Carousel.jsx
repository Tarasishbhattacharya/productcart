import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import "./Carousel.css"
import React from 'react'

const Carousel = () => {
    const prod_cards=[
        {
            imgsrc:"https://www.pixelstalk.net/wp-content/uploads/images5/4K-Food-Wallpaper-HD-Free-download.jpg"
        },
        {
            imgsrc:"https://cdn.pixabay.com/photo/2023/05/14/13/58/background-7993019_1280.png"
        },
        {
            imgsrc:"https://static.vecteezy.com/system/resources/thumbnails/022/559/426/small/american-cheese-bbq-beef-with-tomato-lettuce-juicy-beef-burger-fast-food-presentation-studio-product-isolated-on-white-background-photo.jpg"
        },
        {
            imgsrc:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
        },{
            imgsrc:"https://img.freepik.com/free-photo/flat-lay-bunch-fresh-food-donation_23-2148733836.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718323200&semt=ais_user"
        },
        {
            imgsrc:"https://st3.depositphotos.com/1781787/36615/i/450/depositphotos_366152128-stock-photo-crisis-food-products-isolation-period.jpg"
        }
    ]

    const sliderSettings = {
        // width:"100%",
        // arrows:true,
        dots:true,
        autoplay:true,
       slidesToShow: 1,
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
    <div className="content carousel">
      <Slider {...sliderSettings} >
      {prod_cards.map((prod,ind)=>{
        return (
            <div key={ind}>
            <img alt="" src={prod.imgsrc} width="95%" height="500px" />
            </div>
        )
      })}

      </Slider>
    </div>
  )
}

export default Carousel
