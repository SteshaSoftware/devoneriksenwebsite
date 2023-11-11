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
          alt="Theft of Fire"
          src={book1}
        />

        <Stack direction={"column"} spacing={1}>
          <Typography variant='h6' className='mb-10'>Orbital Space: Book 1</Typography>

          <Typography variant='h4' color={"white"}>Theft of Fire</Typography>
          {/* <Typography variant='body1' color={"#b79cff"} sx={{ fontSize:30 ,fontWeight:"bold"}}>$ 26.00</Typography> */}

          <Typography fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }}  variant='body1' color={"white"}> At the frozen edge of the solar system lies a hidden treasure which could spell their 
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
          {/* <StarRating rating={4.86} />  */}
        </Stack>

      </Box>
    </Box>
  )
}

export default TheftOfFire


// flex flex-col sm:flex-row gap-6 justify-center sm:justify-start text-center sm:text-start items-center sm:items-start' sx={{ marginTop: "60px", marginBottom: "60px" }}