import { Box, Typography } from '@mui/material'
import React from 'react'
import Article from '../components/ArticleBuild/ArticleBuild'

import { DarkLighthouse } from '../writing/DarkLighthouse';
import { SwordLessons } from '../writing/SwordLessons';
import { EggWizard } from '../writing/EggWizard';
import { Beatles } from '../writing/Beatles';
import { AdoptedVampire } from '../writing/AdoptedVampire';
import { CatInvader } from '../writing/CatInvader';

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
              <Article {...DarkLighthouse} />
              <Article {...EggWizard} />
              <Article {...SwordLessons} />
              <Article {...Beatles} />
              <Article {...AdoptedVampire} />
              <Article {...CatInvader} />
            </Box>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Fictionwrting
