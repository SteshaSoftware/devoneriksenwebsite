import { Box, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import Article from '../components/ArticleBuild/ArticleBuild'

import { DarkLighthouse } from '../writing/Fiction/DarkLighthouse';
import { SwordLessons } from '../writing/Fiction/SwordLessons';
import { EggWizard } from '../writing/Fiction/EggWizard';
import { Beatles } from '../writing/Fiction/Beatles';
import { AdoptedVampire } from '../writing/Fiction/AdoptedVampire';
import { CatInvader } from '../writing/Fiction/CatInvader';

import { update20231219 } from '../writing/Updates/update20231219';
import { update20231230 } from '../writing/Updates/update20231230';
import { update20240115 } from '../writing/Updates/update20240115';
import { update20240118 } from '../writing/Updates/update20240118';
import { update20240209 } from '../writing/Updates/update20240209';
import { update20240212 } from '../writing/Updates/update20240212';
import { update20240223 } from '../writing/Updates/update20240223';
import { update20240226 } from '../writing/Updates/update20240226';
import { update20240313 } from '../writing/Updates/update20240313';
import { update20240509 } from '../writing/Updates/update20240509';
import { update20240703 } from '../writing/Updates/update20240703';
import { update20240704 } from '../writing/Updates/update20240704';
import { update20240705 } from '../writing/Updates/update20240705';
import { update20240706 } from '../writing/Updates/update20240706';
import { update20240816 } from '../writing/Updates/update20240816';
import { update20240913 } from '../writing/Updates/update20240913';
import { update20241003 } from '../writing/Updates/update20241003';

import { writingprocess } from '../writing/Craft/writingprocess';
import { changeplans } from '../writing/Craft/changeplans';
import { exposition } from '../writing/Craft/exposition';
import { completework } from '../writing/Craft/completework';
import { storybloat } from '../writing/Craft/storybloat';
import { unreliablenarrator } from '../writing/Craft/unreliablenarrator';

function Fictionwrting() {
  const location = useLocation()

  const articles = [
    update20241003,
    update20240913,
    update20240816,
    unreliablenarrator,
    update20240706,
    update20240705,
    update20240704,
    storybloat,
    update20240703,
    update20240509,
    update20240313,
    update20240226,
    update20240223,
    update20240212,
    update20240209,
    completework,
    exposition,
    update20240118,
    changeplans,
    writingprocess,
    update20240115,
    update20231230,
    update20231219,
    DarkLighthouse,
    EggWizard,
    SwordLessons,
    Beatles,
    AdoptedVampire,
    CatInvader,
  ];

  // Filter articles based on the current path
  const filteredArticles = articles.filter((article) => {
    if (location.pathname === '/writing') return true;
    if (location.pathname === '/writingfiction' && article.tag === 'fiction') return true;
    if (location.pathname === '/writingupdates' && article.tag === 'updates') return true;
    if (location.pathname === '/writingcraft' && article.tag === 'craft') return true;
    return false;
  });

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
              {filteredArticles.map((article) => (
                <Article {...article} />
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Fictionwrting
