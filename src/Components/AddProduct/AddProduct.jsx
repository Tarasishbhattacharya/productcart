import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./AddProduct.css"
import { useDispatch } from 'react-redux'
import { addProd } from '../../Redux/Crudslice'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[addProduct,SetAddProduct]=useState({
    title:"",
    description:""
  })
  const[prodImg,SetProdImg]=useState(null)

  const handlechange=(e)=>{
    SetAddProduct({...addProduct,[e.target.name]:e.target.value})
    console.log(addProduct)
  }
  const handleImage=(e)=>{
    SetProdImg(e.target.files[0]);
  }
  const handlesubmit=(e)=>{
    // e.preventDefault();
    let prodData=new FormData();
    prodData.append("title",addProduct.title)
    prodData.append("description",addProduct.description);
    prodData.append("image",prodImg);
    dispatch(addProd(prodData)).then(()=>{
      navigate("/prod")
    })
    // for(let  prod of prodData.entries()){
    //     console.log(prod[0],prod[1])
    // }
  }
  return (
    <>
      <Container maxWidth="sm" className='add_product_container'>
        <Paper elevation={2} className='add_product_form'>
          <Typography variant="h6" className='add_product_title'>
            Add product
          </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <TextField variant='outlined' type='text' label="Title" name="title" onChange={handlechange}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField variant='outlined' type='text' label="Description" name="description" onChange={handlechange}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField variant='outlined' type='file'  name="image" onChange={handleImage}/>
        </Grid>
        </Grid>
        <Button  onClick={handlesubmit} variant='contained' style={{marginTop:"8px"}}>Add</Button>
        </Paper>

      </Container>
    </>
  )
}

export default AddProduct
