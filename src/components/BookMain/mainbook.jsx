import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

import "./mainbook.css"
import PurchaseBox from '../PurchaseBox/PurchaseBox'
import Snark from '../../images/green_snark.png'

function MainBook({ Title, Series, SeriesNum, BlurbHead, Blurb, GlowTxt, LinkGlow, LinkAmz, LinkBN, LinkOther, LinkGR, BigCover }) {

  const blurbHTML = { __html: Blurb };

  return (
    <>
      <Card sx={{ marginLeft: "auto", marginRight: "auto", color: "", display: 'flex', flexDirection: { md: "row", xs: "column", sm: "column" }, textAlign: { xs: "center", md: "start" }, background: "none", width: "80%", justifyContent: "space-between", alignItems: "center", padding: 0 }}>


        <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1, md: 0 }}}>
          <CardContent sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "column", flex: '-1 0 auto', width: {sm:'50%', md:'80%', lg:'100%' }}} data-aos="fade-right">
            {Series && (
              <Typography component="div" variant="h5" fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
                <br />{Series}: Book {SeriesNum}
              </Typography>
            )}
            <Typography component="div" variant="h5" mt={1.5} fontSize={{ xs: 28, sm: 28, md: 70, lg: 80 }} fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
              {Title}
            </Typography>
            <Typography variant="subtitle1" color="white" component="div" fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }} sx={{ marginTop: { xs: 1.2 }, marginRight: { md: 15 } }}>
              {BlurbHead}</Typography>
            <Typography variant="subtitle1" color="white" component="div" fontSize='16px'>
              <br /><div dangerouslySetInnerHTML={blurbHTML} />
            </Typography>

            <PurchaseBox GlowTxt={GlowTxt} LinkGlow={LinkGlow} LinkAmz={LinkAmz}
              LinkBN={LinkBN} LinkOther={LinkOther} LinkGR={LinkGR} />
          </CardContent>
        </Box>
        <a href={LinkAmz}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.sa_event('Amz_cover')}
          style={{
            display: 'block',
            padding: { md: 2, xs: 3 },
            width: '100%',
          
          }}
        >
          <CardMedia
            data-aos="fade-left"
            component="img"
            sx={{ width: {md:'100%', lg:'80%'}, height: 'auto'}}
            image={BigCover}
            alt={`${Title} by Devon Eriksen`}
          />
        </a>
      </Card>

    </>

  )
}

export default MainBook
