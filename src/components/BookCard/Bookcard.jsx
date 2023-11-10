import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
// import "./authorCard.css"
import book1 from "../../images/thicc-cover.png"
import "./bookcard.css"
import { Link } from 'react-router-dom'
import PurchaseBox from '../PurchaseBox/PurchaseBox'

const BookCard = () => {
  return (
    <>
      <Card sx={{ marginLeft: "auto", marginRight: "auto", color: "", display: 'flex', flexDirection: { md: "row", xs: "column", sm: "column" }, textAlign: { xs: "center", md: "start" }, background: "none", width: "90%", justifyContent: "space-between", alignItems: "center", padding: 0 }}>


        <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1, md: 0 } }}>
          <CardContent sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "column", flex: '-1 0 auto', }} data-aos="fade-right">
            <Typography component="div" variant="h5" fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
              Orbital Space: Book 1
            </Typography>
            <Typography component="div" variant="h5" mt={1.5} fontSize={{ xs: 28, sm: 28, md: 70, lg: 80 }} fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
              Theft of Fire
            </Typography>
            <Typography variant="subtitle1" color="white" component="div" fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }} sx={{ marginTop: { xs: 1.2 }, marginRight: { md: 15 } }}>
            At the frozen edge of the solar system lies a hidden treasure which could spell their 
            fortune or their destruction—but only if they survive each other first.</Typography>
            <Typography variant="subtitle1" color="white" component="div" fontSize='16px'>
            <br /><p><b>Marcus Warnoc</b> has a little problem. His asteroid mining ship—his inheritance, 
            his livelihood, and his home—has been hijacked by a pint-sized corporate heiress with 
            enough blackmail material to sink him for good, a secret mission she won’t tell him about, 
            and enough courage to get them both killed. She may have him dead to rights, but if he 
            doesn’t turn the tables on this spoiled Martian snob, he’ll be dead, period. He’s not 
            giving up without a fight.</p>
            <p><i>He has a plan.</i></p>
            <p><b>Miranda Foxgrove</b> has the opportunity of a lifetime almost within her grasp if she 
            can reach it. Her stolen spacecraft came with a stubborn, resourceful captain who refuses 
            to cooperate—but he’s one of the few men alive who can snatch an unimaginable treasure 
            from beneath the muzzles of countless railguns. And if this foulmouthed Belter thug 
            doesn’t want to cooperate, she’ll find a way to force him. She’s come too far to give up 
            now.</p>
            <p><i>She has a plan.</i></p>
            <p>They’re about to find out that a plan is a list of things that won’t happen.</p>
            </Typography>

            <PurchaseBox />
          </CardContent>
        </Box>
        <CardMedia
          data-aos="fade-left"
          component="img"
          sx={{ padding: { md: 2, xs: 3 }, width: '100%', maxWidth: { md: "500px", xs: "70%", sm: "65%" }, height: { md: "500", xs: "70%", sm: "65%" } }}
          image={book1}
          alt="Theft of Fire by Devon Eriksen"
        />
      </Card>

    </>

  )
}

export default BookCard
