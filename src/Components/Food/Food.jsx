import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import './Food.css'
const Food = () => {
    const items = [
        {
            title: "Enjoy With",
            product: "Chinese",
            buttonText: "Browse",
            image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
            backgroundColor: "#333",
            textColor: "white"
        },
        {
            title: "Enjoy With",
            product: "Indian",
            buttonText: "Browse",
            image: "https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg",
            backgroundColor: "#f5a623",
            textColor: "black"
        },
        {
            title: "Enjoy With",
            product: "Italian",
            buttonText: "Browse",
            image: "https://www.shutterstock.com/image-photo/full-table-italian-meals-on-260nw-1829686103.jpg",
            backgroundColor: "#d32f2f",
            textColor: "white"
        },
        {
            title: "Enjoy With",
            product: "Mughlai",
            buttonText: "Browse",
            image: "https://www.shutterstock.com/image-photo/mughlai-chicken-pulao-tasty-rice-260nw-2394531455.jpg",
            backgroundColor: "#e0e0e0",
            textColor: "black"
        },
        {
            title: "Enjoy With",
            product: "French",
            buttonText: "Browse",
            image: "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-confit-de-canard.jpg.webp",
            backgroundColor: "#4caf50",
            textColor: "white"
        },
        {
            title: "Enjoy With",
            product: "European",
            buttonText: "Browse",
            image: "https://media.istockphoto.com/id/646207148/photo/fish-and-meat-meals-variety-flat-lay.jpg?s=612x612&w=0&k=20&c=iUfVl5dTLZVGiq3WaP0fqcxH4sF8fzeAglPO_vrehB0=",
            backgroundColor: "#2196f3",
            textColor: "white"
        }
    ];
  return (
    <>
      <Grid container spacing={2} padding={2}>
            {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                        className="promotional-card"
                        style={{ backgroundColor: item.backgroundColor, color: item.textColor }}
                    >
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="h4" component="div" className="promotional-product">
                            {item.product.split(' ').map((word, idx) => (
                                <span key={idx}>{word}<br /></span>
                            ))}
                        </Typography>
                        <Button variant="contained" color="error">
                            {item.buttonText}
                        </Button>
                        <img src={item.image} alt={item.product} className="promotional-image" />
                    </Box>
                </Grid>
            ))}
        </Grid>
    </>
  )
}

export default Food
