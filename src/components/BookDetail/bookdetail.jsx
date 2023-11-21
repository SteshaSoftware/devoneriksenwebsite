import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material'
import "./bookdetail.css"
import PurchaseBox from '../PurchaseBox/PurchaseBox'

function BookDetail({ Title, Series, SeriesNum, BlurbHead, Blurb, LinkSample, LinkAmz, LinkBN, LinkOther, LinkGR, Cover }) {
  const blurbHTML = { __html: Blurb };

  return (
    <Box sx={{ width: { xs: "90%", sm: "80%", md: "70%" }, marginTop: "80px", marginX: "auto", color: "#ff9b02" }}>

      <Box className='flex  gap-6 ' sx={{ marginTop: "60px", marginBottom: "60px", textAlign: { xs: "center", sm: "center", md: "start" }, justifyContent: { xs: "cente", md: "start" }, alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", sm: "column", md: "row" } }}>
        <Box
          component="img"
          sx={{ width: 350 }}
          alt={`${Title}`}
          src={Cover}
        />

        <Stack direction={"column"} spacing={1}>
          {Series && (
            <Typography variant='h6' className='mb-10'>{Series}: Book {SeriesNum}</Typography>
          )}
          <Typography variant='h4' color={"white"}>{Title}</Typography>

          <Typography fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }} variant='body1' color={"white"}>
            {BlurbHead}
          </Typography>
          <Typography variant="subtitle1" color="white" component="div" fontSize='16px'>
            <br /><div dangerouslySetInnerHTML={blurbHTML} />
          </Typography>
          <PurchaseBox LinkSample={LinkSample} LinkAmz={LinkAmz}
            LinkBN={LinkBN} LinkOther={LinkOther} LinkGR={LinkGR} />
          {/* <StarRating rating={4.86} />  */}
        </Stack>

      </Box>
    </Box>
  )
}

export default BookDetail


// flex flex-col sm:flex-row gap-6 justify-center sm:justify-start text-center sm:text-start items-center sm:items-start' sx={{ marginTop: "60px", marginBottom: "60px" }}