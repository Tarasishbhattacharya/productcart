import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProd, getProdBySearch, showProd } from '../../Redux/Crudslice';
import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Skeleton, TextField, Typography } from '@mui/material'; 
import "./Showproduct.css"
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"
import BrandCarousel from '../Carousel/BrandCarousel';
import Skel from './Skel';


const ShowProduct = () => {
  const dishes=[
    {
      imgsrc:"",
      name:""
    },
    {
      imgsrc:"",
      name:""
    },
    {
      imgsrc:"",
      name:""
    },
    {
      imgsrc:"",
      name:""
    },
    {
      imgsrc:"",
      name:""
    },
    {
      imgsrc:"",
      name:""
    },
  ]
    const dispatch=useDispatch();
    const {prodList,totalpage,isLoading}=useSelector((state)=>state.product)
    const[totalRecords,setPage]=useState();
    const[search,setSearch]=useState("")

    useEffect(()=>{
       dispatch(getProdBySearch(search))
    },[search])
    useEffect(()=>{
        dispatch(showProd())
    },[])

    const handleChange=(prod,pageNo)=>{
       setPage(pageNo);
       dispatch(showProd({
        page:pageNo,
        perpage:10
       }))
    }
    const handlesearch=(e)=>{
      setSearch(e.target.value)
    }

    // const handleDelete=(prodId)=>{
    //   let data={
    //     id:prodId
    //   }
    //   dispatch(deleteProd(data))
    // }
    if(isLoading){
      return (
        <>
        <Skel/>
        </>
      )
    }
    const fireAlert = (prodId) => {
      const data={
        id:prodId
      }
      Swal.fire({
          title: 'Do you want delete?',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          icon: 'warning'
      }
      ).then((result) => {
       
          if (result.isConfirmed) {
            dispatch(deleteProd(data)).then(()=>{
              dispatch(showProd())
            })
            Swal.fire('Deleted successfuly', '', 'success');

        } else
            Swal.fire('Not deleted , cancelled!', '', 'error')
        })
          /* Read more about isConfirmed, isDenied below */
          // if (result.isConfirmed) {

          //     Swal.fire('Nice to meet you', '', 'success');

          // } else
          //     Swal.fire(' Cancelled', '', 'error')

      }
    
  return (
    <>
    <Box className={prodList.length==0 ? "empty_prod":"product"}>
      {/* {prodList?.map((prod)=>{
        return (
            <div>
                <h5>{prod?.title}</h5>
                <h5>{prod?.description}</h5>
                <Avatar src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${prod?.image}`}
                 sx={{margin:"auto",height:"60px",width:"60px"}}
                />
            </div>
        )
      })} */}
      <Grid container spacing={2}>
       <Grid item xs={12} md={12}>
         <Box>
            <Typography variant='h5'>Search product by your choice</Typography>
         </Box>
       </Grid>
       <Grid item xs={12} sm={12} md={12}>
         <Box>
           <TextField type="text" label="search" onChange={handlesearch}/>
         </Box>
       </Grid>
      </Grid>
      <Container maxWidth="lg">
       <Typography variant="h4" sx={{margin:"30px auto"}}>
          Our custom products
       </Typography>
       <Grid container spacing={3}> 
        {
           prodList.length>0  ? prodList?.filter((prod)=>{
             if(search.length==0){
              return prod
             }else{
              return prod.title.toLowerCase().includes(search.toLowerCase())
             }
           }).map((prod)=>{
            return(
              <Grid item xs={12} sm={12} md={4}>
               <Card className='prod_card'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${prod?.image}`}
      />
      <CardContent className='card_content'>
        <Typography gutterBottom variant="h5" component="div">
         {prod?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prod?.description}
        </Typography>
      </CardContent>
      <CardActions className='card_action'>
      <ButtonGroup className="card_btn">
        <Link>
        <Button variant='contained'  size="small" onClick={()=>fireAlert(prod?._id)}>Delete</Button>
        </Link>
        <Link to={`/edit/${prod?._id}`}>
        <Button variant='contained' size="small">Edit</Button>
        </Link>
        <Link to={`/prod/${prod?._id}`}>
        <Button variant='contained' size="small">View</Button>
        </Link>
        </ButtonGroup>
      </CardActions>
    </Card>
              </Grid>
            )
          }):(
            <Typography variant="h4" sx={{margin:" 20px auto"}}>
             No Data Found
            </Typography>
          )
        }
       </Grid>
      </Container>
      <div className='pagination'>
      
        {
          prodList.length>0 ? (
            <Pagination
        count={totalpage}
        onChange={handleChange}
        totalRecords={totalRecords}
       //  sx={{display:"flex",justifyContent:"center", alignItems:"center"}}
       />
          ):""
        }
    
      </div>
      </Box>

      {/* <BrandCarousel/> */}
    </>
  )
}

export default ShowProduct
