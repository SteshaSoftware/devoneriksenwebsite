import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material'
import book1 from "../../images/ToFcover.jpg"
import { Link } from 'react-router-dom'
import "./theft.css"
import PurchaseBox from '../PurchaseBox/PurchaseBox'
import StarRating from '../Stars/StarRating'

const TheftOfFire = () => {
  return (
    <Box sx={{ width: { xs: "90%", sm: "80%", md: "70%" }, marginTop: "80px", marginX: "auto", color: "#ff9b02" }}>

      <Box className='flex  gap-6 ' sx={{ marginTop: "60px", marginBottom: "60px", textAlign: { xs: "center", sm: "center", md: "start" }, justifyContent: { xs: "cente", md: "start" }, alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", sm: "column", md: "row" } }}>
        <Box
          component="img"
          sx={{ width: 350 }}
          alt="The house from the offer."
          src={book1}
        />

        <Stack direction={"column"} spacing={1}>
          <Typography variant='h6' className='mb-10'>Orbital Space: Book 1</Typography>

          <Typography variant='h4' color={"white"}>Theft of Fire</Typography>
          {/* <Typography variant='body1' color={"#b79cff"} sx={{ fontSize:30 ,fontWeight:"bold"}}>$ 26.00</Typography> */}

          <Typography variant='body1' color={"white"} >If you want to snatch a priceless alien artifact from the most heavily defended piece of sky in the outer solar system, and get away undetected, your best bet is a team of highly-experienced professionals who work together like the gears of an expensive watch.

            Or you could just send a tramp spacecraft constructed from plans found on internet, and crew it with a failed asteroid miner turned space pirate, a genetically modified - and emotionally unstable - heiress, and a prototype Artificial Intelligence in the midst of a catastrophic identity crisis.

            Maybe they won’t murder each other on the way there.</Typography>
          <PurchaseBox />
          {/* <StarRating rating={4.86} />  */}
        </Stack>

      </Box>
    </Box>
  )
}

export default TheftOfFire


// flex flex-col sm:flex-row gap-6 justify-center sm:justify-start text-center sm:text-start items-center sm:items-start' sx={{ marginTop: "60px", marginBottom: "60px" }}