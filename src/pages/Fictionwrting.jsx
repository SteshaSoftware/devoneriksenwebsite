
import { Box, Typography } from '@mui/material'
import React from 'react'
import Article from '../components/ArticleBuild/ArticleBuild'

import { ShelfBuilderContent } from '../writing/adoptedvampire';

function Fictionwrting() {


  return (
    <>
      <div data-aos="zoom-out-down" data-aos-duration="1500" style={{ width: "100%" }}>
        <Box
          sx={{

            display: "flex",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box sx={{ width: { xs: "95%", md: "89%" }, marginX: "auto", color: "#ff9b02" }}>
            <Box sx={{ width: "70%", marginX: "auto", color: "white" }}>
              <Article {...ShelfBuilderContent} />
            </Box>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Fictionwrting
















