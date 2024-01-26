import React from 'react'
import "./highlightcard.css"
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import { Box, Typography } from '@mui/material';
function HighlightCard({ Pic, Picalt, Link, Click }) {
  return (

    <div className="highlight-container">
      <Box sx={{ width: '100%', marginX: "auto" }}>

        <a href={Link} target="_blank" rel="noopener noreferrer" onClick={() => window.sa_event({Click})}>
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

      </Box >
    </div>


  )
}

export default HighlightCard