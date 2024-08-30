import { AppBar, Avatar, Box, Button, ButtonGroup, CssBaseline, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import Drawercomp from './Drawercomp';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/Authslice';
const Navbar = () => {
    const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:890px)');
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {token,userInfo,userpic}=useSelector((state)=>state.auth)
   const handleLogout=()=>{
    dispatch(logOut());
    navigate('/login');
   }
  return (
    <>
     <AppBar position="static" className='appbar' style={{backgroundColor:"black"}}>
      <CssBaseline />
      <Toolbar style={{display:"flex",justifyContent:"space-around"}}>
        {
            isMobile ? (
                <>
                <Drawercomp/>
                </>
            ):
            (
                <>
                <Typography variant="h6" className='appbar_name'>
                ProductShop
              </Typography>
                <div className='navbar_links'>
                <Link to="/"  className='link'>
                  Home
                </Link>
                <Link to="/prod"  className='link'>
                  Products
                </Link>
                <Link to="/add" className='link'>
                  Add product
                </Link>
                <Link to="/about" className='link'>
                  About
                </Link>
                <Link to="/contact" className='link'>
                  Contact
                </Link>
              </div>
              <div className='user_image' style={{display:"flex",gap:"5px", alignItems:"center"}}>
                {
                token!==null && token !==undefined ?(
                    <Button onClick={handleLogout} variant='outlined' size='small' className='logout_btn' style={{color:"white",backgroundColor:"#00c853", marginLeft:"90px",border:"1px solid green",outline:"none",borderRadius:"10px",padding:"8px"}}>Log out</Button>
                ):null
              }
              {/* {
                    token !==null && token !==undefined ?(
                        <>
                        <Typography variant='p' style={{fontSize:"18px",display:"inline-block"}}>{`Hi,${userInfo}`}</Typography>
                        <Link to={'/profile'}>
                        <Avatar alt="Remy Sharp" src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`} />
                        </Link>
                        </>
                    ):null
                } */}
              </div>
              <div>
                {
                    token !==null && token !==undefined ?(
                        <>
                        <Box style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"3px"}}>
                        <Typography variant='p' style={{fontSize:"18px"}}>{`Hi,${userInfo}`}</Typography>
                        <Link to={'/profile'}>
                        <Avatar alt="Remy Sharp" src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`} />
                        </Link>
                        </Box>
                        </>
                    ):null
                }
              {/* {
                token!==null && token !==undefined ?(
                    <Button onClick={handleLogout} variant='outlined' size='small' className='logout_btn' style={{color:"white",backgroundColor:"#00c853", marginLeft:"70px",border:"1px solid green",outline:"none",borderRadius:"10px"}}>Log out</Button>
                ):null
              } */}
            </div> 
              </>
            )
        }
          
      </Toolbar>
    </AppBar> 
    </>
  )
}

export default Navbar
