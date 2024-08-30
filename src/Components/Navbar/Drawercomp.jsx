import { Avatar, Button, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/Authslice';
const Drawercomp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {token,userInfo,userpic}=useSelector((state)=>state.auth)
    const navigate=useNavigate();
  const dispatch=useDispatch();
    const handleLogout=()=>{
        dispatch(logOut());
        navigate('/login');
       }
  return (
    <>
      <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      >
        <List style={{backgroundColor:"#00e676"}}>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className='link'>Home</Link>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/prod" className='link'>products</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/add" className='link'>Add product</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className='link'>About</Link>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className='link'>Contact</Link>
            </ListItemText>
          </ListItem>
          <div>
              {
                token!==null && token !==undefined ?(
                    <Button onClick={handleLogout} variant='outlined' size='small' className='logout_btn' style={{color:"white",backgroundColor:"#00c853", marginLeft:"70px",border:"1px solid green",outline:"none",borderRadius:"10px",margin:"auto"}}>Log out</Button>
                ):null
              }
            </div>
        </List> 
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <div style={{display:"flex",gap:"5px", alignItems:"center"}}>
              {
                    token !==null && token !==undefined ?(
                        <>
                        <Typography variant='h6' style={{fontSize:"18px"}}>{`Hi,${userInfo}`}</Typography>
                        <Link to={'/profile'}>
                        <Avatar alt="Remy Sharp" src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`} />
                        </Link>
                        </>
                    ):null
                }
    </div>
    </>
  )
}

export default Drawercomp
