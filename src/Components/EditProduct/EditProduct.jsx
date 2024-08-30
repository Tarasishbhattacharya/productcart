import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {  showProd, updateProd } from '../../Redux/Crudslice'
// import "../AddProduct/AddProduct.css"
const EditProduct = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {prodList}=useSelector((state)=>state.product)
    const {id}=useParams();
    const[editProduct,SetEditProduct]=useState({})
      const[prodImg,SetProdImg]=useState(null)
      const[currImg,setCurrImg]=useState(null)
    useEffect(()=>{
      const data=prodList.find(prod=>prod._id==id)
     SetEditProduct({
        title:data?.title,
        description:data?.description
     })
     SetProdImg(data.image)
     
    },[])
    
    // const[editProduct,SetEditProduct]=useState({})
    //   const[prodImg,SetProdImg]=useState(null)
    //   const[currImg,setCurrImg]=useState(null)

    const handlechange=(e)=>{
        SetEditProduct({...editProduct,[e.target.name]:e.target.value})
    }

    const handlesubmit=(e)=>{
      e.preventDefault()
      console.log(editProduct,id)
      let prodData=new FormData();
    prodData.append("id",id)
    prodData.append("title",editProduct.title)
    prodData.append("description",editProduct.description);
    prodData.append("image",prodImg);
    // dispatch(addProd(prodData))
    dispatch(updateProd(prodData)).then(()=>{
      navigate("/prod")
    })
    
    
    }

    const handleImage=(e)=>{
        SetProdImg(e.target.files[0]);
        setCurrImg(URL.createObjectURL(e.target.files[0]))
        console.log(e)
    }
  return (
    <>
      <Container maxWidth="sm" className='add_product_container'>
        <Paper elevation={2} className='add_product_form'>
          <Typography variant="h6" className='add_product_title'>
            Edit product
          </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={12}>
          <TextField variant='outlined' type='text'  value={editProduct.title} name="title" onChange={handlechange}/>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <TextField variant='outlined' type='text'  value={editProduct.description} name="description" onChange={handlechange}/>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <TextField variant='outlined' type='file'  name="image" onChange={handleImage}/>
        </Grid>
        <img style={{height:"100px",width:"100px",margin:" 5px auto"}} src={currImg==null ? `https://wtsacademy.dedicateddevelopers.us/uploads/product/${prodImg}`:`${currImg}`}/>
        </Grid>
        <Button  onClick={handlesubmit} variant='contained' style={{marginTop:"8px"}}>Add</Button>
        </Paper>

      </Container>
    </>
  )
}

export default EditProduct
