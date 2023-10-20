import { Box, Typography } from '@mui/material'
import React from 'react'
import CategoryCards from '../components/categorycards/CategoryCards'
// import CategoryCards from '../components/categorycards/CategoryCards'


const OrbitalSpace = () => {
  return (
    <div>
       <Box sx={{width:"89%", marginTop:"50px", marginX:"auto", color:"#ff9b02"}}>
      <Typography variant='h5' className='mb-10'>Orbital Space</Typography>
      <CategoryCards/>
    </Box>
    </div>
  )
}

export default OrbitalSpace