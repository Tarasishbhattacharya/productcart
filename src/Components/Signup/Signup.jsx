import React, { useState } from 'react'
import './Signup.css'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from "formik"
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { userReg } from '../../Redux/Authslice';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {isRegistration}=useSelector((state)=>state.auth)
    const data={
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        // profile_pic:''
    }
    const [img,SetImg]=useState(null)

    const handleImage=(e)=>{
        SetImg(e.target.files[0]);
    }

    const validationFormSchema=Yup.object({
        first_name:Yup.string().min(3,"First name should have atleast 3 character").max(15).required("First Name is required"),
        last_name:Yup.string().min(3,"Last name should have atleast 3 character").max(15).required("Last Name is required"),
        email: Yup.string().email("Email should be valid").required("Email is required"),
        password:Yup.string().required()
    })
    const {handleSubmit,handleBlur,touched,errors,values,setFieldValue}=useFormik({
        initialValues:data,
        validationSchema:validationFormSchema,
        onSubmit:(values)=>submitData(values)
    })

    const handleChange=(e)=>{
        setFieldValue([e.target.name],e.target.value)
    }

    const submitData=(values)=>{
        let regData=new FormData();
        for(let value in values){
           regData.append(value,values[value])
        }
        regData.append("profile_pic",img);
        dispatch(userReg(regData));
       }
       if(isRegistration){
         navigate('/login')
       }
  return (
    <>
      <Box className="reg_form">
      <Container maxWidth="sm">
        <Paper elevation={2}>
        <Avatar className='avatar' style={{backgroundColor:"darkmagenta"}}>
        <LockOutlinedIcon className='icon'/>
        </Avatar>
        <Typography variant="h5" component="h5">
          Sign Up
        </Typography>
       <form className='form'>
       <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField variant='outlined' type='text' label="First Name" name="first_name" onBlur={handleBlur} onChange={handleChange} value={values.first_name}/><br />
          {errors.first_name && touched.first_name? (<span>{errors.first_name}</span>):null}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField variant='outlined' type='text' label="Last Name" name="last_name" onBlur={handleBlur} onChange={handleChange} value={values.last_name}/><br />
          {errors.last_name && touched.last_name? (<span>{errors.last_name}</span>):null}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField variant='outlined' type='email' label="Email" name="email" onBlur={handleBlur} onChange={handleChange} value={values.email}/><br />
          {errors.email && touched.email? (<span>{errors.email}</span>):null}
        </Grid>
        <Grid item  xs={12} sm={12} md={12} lg={12}>
          <TextField variant='outlined' type='password' label="Password" name="password" onBlur={handleBlur} onChange={handleChange} value={values.password}/><br />
          {errors.password && touched.password? (<span>{errors.password}</span>):null}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField variant='outlined' type='file'  name="profile_pic" onChange={handleImage}/>
        </Grid>
         </Grid>
       </form>
       <Button  onClick={handleSubmit} variant='contained'>Sign up</Button>
        <Typography variant='p' component="div">
          <Link to={'/login'} className='form_link'>
          Already have an account?Sign In
          </Link>
         </Typography>
        </Paper>
      </Container>
      </Box>
    </>
  )
}

export default Signup
