import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

import "./mainbook.css"
import PurchaseBox from '../PurchaseBox/PurchaseBox'
import Button from '../Button/button'
import StarButton from '../StarButton/starbutton'
import { WidthWideTwoTone } from '@mui/icons-material'
import { FaArrowCircleRight } from 'react-icons/fa'

function MainBook({ Title, Series, SeriesNum, Page, BlurbHead, MiniBlurb, LinkDefault, GlowTxt, LinkGlow,  LinkDir, LinkAmz, LinkOther, LinkGR, BigCover, Awards, MainQuotes }) {
  const blurbHTML = { __html: MiniBlurb };

  return (
    <>

      <Card sx={{ marginLeft: "auto", marginRight: "auto", color: "", display: 'flex', flexDirection: { md: "row", xs: "column", sm: "column" }, textAlign: { xs: "center", md: "start" }, background: "none", width: "80%", justifyContent: "space-between", alignItems: "center", padding: 0 }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1, md: 0 } }}>
          <CardContent sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "column", flex: '-1 0 auto', width: { sm: '50%', md: '80%', lg: '100%' } }} data-aos="fade-right">
            {Series && (
              <Typography component="div" variant="h5" fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
                <br />{Series}: Book {SeriesNum}
              </Typography>
            )}

            <Typography component="div" variant="h5" mt={1.5} fontSize={{ xs: 28, sm: 28, md: 70, lg: 80 }} fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"} marginBottom={"20px"}>
              {Title}
            </Typography>

            <Typography component="div" fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }} sx={{ marginRight: { md: 15 } }}>
              {Awards.map((awardObj, index) => (
                <React.Fragment key={index}>
                  <span style={{
                    background: 'linear-gradient(0deg, #ff9b02, gold)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline',
                    lineHeight: '2'
                  }} >💫 {awardObj.Award}<br /></span>
                </React.Fragment>
              ))}<br />
            </Typography>

            <Box sx={{ display: "flex", alignItems: { xs: "center" }, flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "start" } }}>
              <StarButton GlowTxt={GlowTxt} LinkGlow={LinkGlow} />
            </Box>
            <div style={{ backgroundColor: "rgba(50, 50, 50, 0.5)", paddingLeft: '20px', paddingBottom: '10px', paddingRight: '10px', marginTop: '16px', marginBottom: '16px' }}>
              <Typography style={{
                fontStyle: 'Bold',
                lineHeight: '1.5'
              }} color="white" component="div" fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }} sx={{ marginTop: { xs: 1.2 } }}>
                {BlurbHead}</Typography>

              <br/>
              {MainQuotes.map((quote, index) => (
  <div key={index} style={{
    border: '2px solid #fff',
    padding: '10px', 
    borderRadius: '8px', 
    margin: '10px 0', 
    maxWidth: '90%', 
    marginLeft: '20px' 
  }}>
    <Typography style={{
      fontSize: '20px',
      fontStyle: 'italic',
      color: "#ff9b02",
      display: 'block',
      paddingLeft: '20px', 
     
    }}>
      {quote.MainQuote}<br/>
    </Typography>
  </div>
))}
              <Typography style={{
                fontSize: '20px'
              }} color="white">
                <br /><div dangerouslySetInnerHTML={blurbHTML} />
                <span className="content" style={{ textAlign: 'right' }}>
                  <a href={Page}>
                    <button class="read-button">Read More <FaArrowCircleRight /> </button>
                  </a>
                </span>
              </Typography>
            </div>
            <Box sx={{ display: "flex", alignItems: { xs: "center" }, flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "start" } }}>
            <Button LinkDir={LinkDir} LinkAmz={LinkAmz} LinkOther={Page} />
            </Box>
            {LinkGR && (
              <Typography component="div" variant="h5" fontSize={{ xs: 20, sm: 24, md: 32 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#FFFFFF"} style={{ marginTop: '20px' }}>
                Add to <a target='_blank' href={LinkGR} style={{ color: "#ff9b02" }} onClick={() => window.sa_event('Goodreads')}>Goodreads</a>
              </Typography>
            )}
          </CardContent>
        </Box>
        <a href={Page}
          
          rel="noopener noreferrer"
          style={{
            display: 'block',
            padding: { md: 2, xs: 3 },
            width: '100%',

          }}
        >
          <CardMedia
            data-aos="fade-left"
            component="img"
            sx={{ width: { md: '100%', lg: '80%' }, height: 'auto' }}
            image={BigCover}
            alt={`${Title} by Devon Eriksen`}
          />
        </a>
      </Card>

    </>

  )
}

export default MainBook
