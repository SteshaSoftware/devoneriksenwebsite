import { Box, Typography } from '@mui/material'
import React from 'react'
import Article from '../components/ArticleBuild/ArticleBuild'

import CatInvader from '../Writing/CatInvader.md'
import Beatles from '../Writing/Beatles.md'
import AdoptedVampire from '../Writing/AdoptedVampire.md'
import SwordLessons from '../Writing/SwordLessons.md'
import EggWizard from '../Writing/EggWizard.md'

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
              <Article articlePath={SwordLessons} />
              <Article articlePath={EggWizard} />
              <Article articlePath={Beatles} />
              <Article articlePath={AdoptedVampire} />
              <Article articlePath={CatInvader} />
            </Box>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Fictionwrting
















