import { Box, Typography } from '@mui/material'
import React from 'react'
import PurchasePage from '../components/PurchasePage/PurchasePage'

import { TheftofFire } from '../components/Books/Orbital-ToF';
import { BoxofTrouble } from '../components/Books/Orbital-BoT';

const Purchase = () => {
  return (
    <Box sx={{ width: "89%", marginTop: "50px", marginX: "auto", color: "#ff9b02" }}>
      <Typography variant='h5' className='mb-10'>Purchase Options</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: "20px" }}>
        <PurchasePage {...TheftofFire} />
      </Box>
    </Box>
  )
}

export default Purchase