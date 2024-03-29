import { Box, Typography } from '@mui/material'
import React from 'react'
import AllNovels from '../components/allnovels/AllNovels'

import { TheftofFire } from '../components/Books/Orbital-ToF';
import { BoxofTrouble } from '../components/Books/Orbital-BoT';

const Novels = () => {
  return (
    <Box sx={{ width: "89%", marginTop: "50px", marginX: "auto", color: "#ff9b02" }}>
      <Typography variant='h5' className='mb-10'>All Novels</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: "20px" }}>
        <AllNovels {...TheftofFire} />
        <AllNovels {...BoxofTrouble} />
      </Box>
    </Box>
  )
}

export default Novels