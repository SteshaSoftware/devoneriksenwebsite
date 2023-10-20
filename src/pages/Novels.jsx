import { Box, Typography } from '@mui/material'
import React from 'react'
import AllNovels from '../components/allnovels/AllNovels'


const Novels = () => {
  return (
    <Box sx={{width:"89%", marginTop:"50px", marginX:"auto", color:"#ff9b02"}}>
      <Typography variant='h5' className='mb-10'>All Novels</Typography>
      <AllNovels/>
    </Box>
  )
}

export default Novels