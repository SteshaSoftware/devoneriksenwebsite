import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

import "./mainbook.css"
import PurchaseBox from '../PurchaseBox/PurchaseBox'
import Snark from '../../images/green_snark.png'

function MainBook({ Title, Series, SeriesNum, BlurbHead, Blurb, LinkSample, LinkAmz, LinkBN, LinkOther, LinkGR, BigCover }) {

  const blurbHTML = { __html: Blurb };

  return (
    <>
      <Card sx={{ marginLeft: "auto", marginRight: "auto", color: "", display: 'flex', flexDirection: { md: "row", xs: "column", sm: "column" }, textAlign: { xs: "center", md: "start" }, background: "none", width: "80%", justifyContent: "space-between", alignItems: "center", padding: 0 }}>


        <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1, md: 0 } }}>
          <CardContent sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "column", flex: '-1 0 auto', }} data-aos="fade-right">
          <a href={LinkAmz} target="_blank" rel="noopener noreferrer" onClick={() => window.sa_event('Amz_WaitisOver')}>
              <Typography component="div" variant="h5" fontSize={{ xs: 28, sm: 28, md: 60 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#fff"} className="hover-text" >
                <br />The Wait is Over!  <span style={{ textDecoration: 'underline' }}>Available Now!</span>
              </Typography>
            </a>
            <div className="feature">
            <img src={Snark} alt="Snark" style={{ width: '50px', marginRight: '20px' }} />
              <a href="https://discoverscifi.com/best-sci-fi-release-of-2023/" target="_blank" rel="noopener noreferrer" onClick={() => window.sa_event('DisSciFi_Fnt')}>>
                <Typography component="div" variant="h5" fontSize={{ xs: 20, sm: 20, md: 35 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#c6ff03"} className="hover-text">     
                  <i><span style={{ textDecoration: 'underline' }}>Voted #5 Best Sci-Fi Novel of 2023</span></i>
                </Typography>
              </a>
            </div>
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

            <PurchaseBox LinkSample={LinkSample} LinkAmz={LinkAmz}
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
            maxWidth: { md: "100%", xs: "70%", sm: "65%" },
            height: { md: "100%", xs: "70%", sm: "65%" }
          }}
        >
          <CardMedia
            data-aos="fade-left"
            component="img"
            sx={{ width: '100%', height: '100%' }}
            image={BigCover}
            alt={`${Title} by Devon Eriksen`}
          />
        </a>
      </Card>

    </>

  )
}

export default MainBook
