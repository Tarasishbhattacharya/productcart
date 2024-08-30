import { Container, Grid, Skeleton } from '@mui/material'
import React from 'react'

const Skel = () => {
  return (
    <>
       <Container maxWidth="lg">
        <Grid container spacing={2}>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         <Grid container spacing={2}>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         </Grid>
         <Grid container spacing={2}>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         <Grid item xs={12} md={4} lg={4}>
         <Skeleton animation="wave" variant="circular" width={40} height={40} />
         <Skeleton animation="wave" height={10} width="40%" />
         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
         </Grid>
         </Grid>
        </Grid>
       </Container>
    </>
  )
}

export default Skel
