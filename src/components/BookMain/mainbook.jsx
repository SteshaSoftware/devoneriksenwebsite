import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

import "./mainbook.css"
import PurchaseBox from '../PurchaseBox/PurchaseBox'
import StarButton from '../StarButton/starbutton'
import { WidthWideTwoTone } from '@mui/icons-material'

function MainBook({ Title, Series, SeriesNum, Page, BlurbHead, MiniBlurb, GlowTxt, LinkGlow, LinkAmz, LinkBN, LinkOther, LinkGR, BigCover, Awards, MainQuotes }) {

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

              <Typography variant="subtitle1" color="white" component="div" fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }} sx={{ marginRight: { md: 15 } }}>
                Discover SciFi “#5 Best Sci-Fi Release of 2023” <br />
                Atomic Rockets Seal of Approval, for Excellence in Correct Science
              </Typography>
            </Typography>

            <Box sx={{ display: "flex", alignItems: { xs: "center" }, flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "start" } }}>
              <StarButton GlowTxt={GlowTxt} LinkGlow={LinkGlow} />
            </Box>
            <div style={{ backgroundColor: "rgba(50, 50, 50, 0.5)", paddingLeft: '20px', paddingBottom: '10px', paddingRight: '10px', marginTop: '16px', marginBottom: '16px' }}>
              <Typography variant="subtitle1" color="white" component="div" fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }} sx={{ marginTop: { xs: 1.2 }, marginRight: { md: 15 } }}>
                {BlurbHead}</Typography>

              <Typography variant="subtitle1" color="white" component="div" fontSize='16px'>
                <br />
                “<i>A great read — hard SF by a retired engineer.</i>” —John Carmack, creator of Doom, Oculus founder
                <br />
                “<i>A glorious adventure and a delight to read.</i>” —John Walker, Autodesk co-founder
                <br />
                “<i>Masterful…A perfect balance of adventure, fun and OG sci-fi</i>” —Daniel Knauf, screenwriter and producer of Carnivàle
                <br />
                “<i>If I've ever read a better firefight in fiction, it doesn't come to me off the top of my head.</i>” —Duane Thomas, gunwriter
              </Typography>

              <Typography variant="subtitle1" color="white" component="div" fontSize='16px'>
                <br /><div dangerouslySetInnerHTML={blurbHTML} /> <br />
                <span className="content" style={{color: '#26a0da', textDecoration: 'underline'}}>
                <a href= {Page}>
                  Read more
                </a>
                </span>
              </Typography>
            </div>
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
