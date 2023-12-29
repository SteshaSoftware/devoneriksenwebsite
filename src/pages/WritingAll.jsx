import { Box, Typography } from '@mui/material'
import React from 'react'
import Article from '../components/ArticleBuild/ArticleBuild'

import { DarkLighthouse } from '../writing/Fiction/DarkLighthouse';
import { SwordLessons } from '../writing/Fiction/SwordLessons';
import { EggWizard } from '../writing/Fiction/EggWizard';
import { Beatles } from '../writing/Fiction/Beatles';
import { AdoptedVampire } from '../writing/Fiction/AdoptedVampire';
import { CatInvader } from '../writing/Fiction/CatInvader';

import { update20231219 } from '../writing/Updates/update20231219';


function Fictionwrting() {
const [currentFilter, setCurrentFilter] = React.useState('All');

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
              <Article {...update20231219} />
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
