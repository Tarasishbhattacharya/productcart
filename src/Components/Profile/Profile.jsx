import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../Redux/Authslice';
import { Avatar, Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import "./Profile.css"
const Profile = () => {
    const dispatch=useDispatch();
    const {userDetails}=useSelector((state)=>state.auth)
    useEffect(()=>{
       dispatch(getUser())
    },[])
    console.log(userDetails)
  return (
    <>
      <Box className="profile">
        <Container maxWidth="lg">
        <Grid container spacing={2}>
         <Grid item xs={12} md={12} lg={12}>
         <Card className='profile_card'>
      <CardActionArea>
        <Avatar className='image' src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userDetails?.profile_pic}`}/>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {`${userDetails?.first_name} ${userDetails?.last_name}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {userDetails?.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         </Grid>
        </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Profile
