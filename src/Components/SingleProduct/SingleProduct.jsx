import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleProd } from '../../Redux/Crudslice'
import { Avatar, Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import "./SingleProduct.css"
const SingleProduct = () => {
    const {id}=useParams()
    const dispatch=useDispatch();
    const {singleProd}=useSelector((state)=>state.product)
    useEffect(()=>{
       dispatch(getSingleProd(id))
    },[])
  return (
    <>
      <Box className="single_prod">
      <Container maxwidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
        <Card className='image'>
      <Avatar style={{height:"200px", width:"200px",margin:"auto"}}
        src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${singleProd?.image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {singleProd?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {singleProd?.description}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
      </Grid>
      </Container>
      </Box>
    </>
  )
}

export default SingleProduct
