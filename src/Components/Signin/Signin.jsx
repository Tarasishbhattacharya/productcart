import React from 'react'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from "formik"
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../Redux/Authslice';
import "./Signin.css"
const Signin = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {token,isLogin}=useSelector((state)=>state.auth)
    const data={
        email:'',
        password:'',
        // profile_pic:''
    }

    const validationFormSchema=Yup.object({
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
        dispatch(userLogin(values))
       }
       if((token!==null && token !==undefined) && isLogin){
        navigate('/');
       }
  return (
    <>
     <Box className="login_form">
     <Container maxWidth="sm">
        <Paper elevation={2}>
        <Avatar className='avatar' style={{backgroundColor:"darkmagenta"}}>
        <LockOutlinedIcon className='icon'/>
        </Avatar>
        <Typography variant="h5" component="h5">
          Sign In
        </Typography>
       <form className='form'>
       <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <TextField variant='outlined' type='email' label="Email" name="email" onBlur={handleBlur} onChange={handleChange} value={values.email}/><br />
          {errors.email && touched.email? (<span>{errors.email}</span>):null}
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField variant='outlined' type='password' label="Password" name="password" onBlur={handleBlur} onChange={handleChange} value={values.password}/><br />
          {errors.password && touched.password? (<span>{errors.password}</span>):null}
        </Grid>
         </Grid>
       </form>
       <Button  onClick={handleSubmit} variant='contained'>Sign In</Button>
        <Link to={'/reg'} className='form_link'>
        <Typography variant='p' component="div">
          Want to Create a new Account?Sign Up
         </Typography>
        </Link>
        </Paper>
      </Container>
     </Box>
    </>
  )
}

export default Signin
