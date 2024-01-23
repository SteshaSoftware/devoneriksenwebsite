import React from 'react'
//import "./reviewCard.css"
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import { Box, Typography } from '@mui/material';
function HighlightCard({ Pic, Picalt, Link }) {
  return (
  

<Box sx={{ height: '250px', marginX: "auto" }}>
  
    <a href={Link} target="_blank" rel="noopener noreferrer">
      <img 
        src={Pic} 
        alt={Picalt} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain', 
        }} 
      />
    </a>

</Box>

   
  )
}

export default HighlightCard