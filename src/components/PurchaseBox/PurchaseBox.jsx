import React from 'react'
import Button from '../Button/button'
import StarButton from '../StarButton/starbutton'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'


function PurchaseBox({ LinkSample,LinkAmz, LinkBN, LinkOther, LinkGR }) {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: {xs: "center"}, flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "start" } }}>
                <StarButton LinkSample = {LinkSample}/>
                <Button LinkAmz = {LinkAmz} LinkBN = {LinkBN} LinkOther = {LinkOther} />
            </Box>
            <Typography component="div" variant="h5" fontSize={{ xs: 20, sm: 24, md: 32 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#FFFFFF"} style={{ marginTop: '20px' }}>
                Add to <a target='_blank' href={ LinkGR } style={{ color: "#ff9b02" }}>Goodreads</a>
            </Typography>
        </>
    )
}

export default PurchaseBox