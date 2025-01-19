import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import buy from '../images/buy direct.png'
import AudioCard from '../components/Audio/AudioCard'
import StarButton from '../components/StarButton/starbutton'
import { TheftofFire } from '../components/Books/Orbital-ToF';
import { BoxofTrouble } from '../components/Books/Orbital-BoT';

const Audiobooks = () => {
  return (
    <Box sx={{ width: "89%", marginTop: "50px", marginX: "auto", color: "#ff9b02" }}>
      <Typography variant='h5' className='mb-10'>Audiobook Retailers</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column', // Stack the button and other elements vertically
          alignItems: 'center', // Center all elements horizontally
          padding: "20px"
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // Stack items vertically
            justifyContent: 'center',
            alignItems: 'center', // Center items horizontally
            marginBottom: '20px' // Add spacing between this section and the next
          }}
        >
          <Typography
            variant="h6"
            color="white"
            sx={{ fontWeight: 'bold', marginBottom: '10px' }} // Add spacing below the text
          >
            Sign Up for Audiobook Updates
          </Typography>

          <StarButton
            GlowTxt="Audiobook Updates"
            LinkGlow="https://www.subscribepage.io/TOF-Audiobook"
          />
        </Box>

        <AudioCard {...TheftofFire} />
      </Box>
    </Box >
  )
}

export default Audiobooks