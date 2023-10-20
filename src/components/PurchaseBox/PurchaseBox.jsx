import React from 'react'
import Button from '../Button/button'
import StarButton from '../StarButton/starbutton'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'


const PurchaseBox = () => {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: {xs: "center"}, flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "start" } }}>
                <StarButton />
                <Button />
            </Box>
            <Typography component="div" variant="h5" fontSize={{ xs: 20, sm: 24, md: 32 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#FFFFFF"} style={{ marginTop: '20px' }}>
                Add to <a href="https://www.goodreads.com/book/show/199142773-theft-of-fire" style={{ color: "#ff9b02" }}>Goodreads</a>
            </Typography>
        </>
    )
}

export default PurchaseBox