import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import photo from "../../images/Devon Author.jpg"

const Biography = () => {
    return (
        <Card sx={{ marginLeft: "auto", marginRight: "auto", color: "", display: 'flex', flexDirection: { md: "row", xs: "column", sm: "column" }, textAlign: { xs: "center", md: "start" }, background: "none", width: "90%", justifyContent: "space-between", alignItems: "center", padding: 0 }}>



            <CardMedia
                data-aos="fade-left"
                component="img"
                sx={{ padding: { md: 7, xs: 3 }, width: { md: "400px", xs: "100%", sm: "65%" }, height: { md: "400px", xs: "100%", sm: "65%" } }}
                image={photo}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1, md: 0 } }}>
                <CardContent sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "column", flex: '-1 0 auto', }} data-aos="fade-right">
                    <Typography component="div" variant="h5" fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
                        BIOGRAPHY
                    </Typography>
                    <Typography component="div" variant="h5" mt={1.5} fontSize={{ xs: 28, sm: 28, md: 70, lg: 80 }} fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
                    Devon Eriksen
                    </Typography>
                    <Typography variant="subtitle1" color="white" component="div" sx={{ marginTop: { xs: 1.5 }, marginRight: { md: 15 }, fontSize:"17px", fontFamily:"Heebo, sans-serif" }}>
                    Devon Eriksen is a life-long reader, with a particular fondness for classics from the golden age of science fiction, such as A Mote in God’s Eye and Ringworld. While he was dissuaded in his childhood from being a writer, retirement from a career in engineering, and the unwavering support of his wives, presented an opportunity to pursue his childhood dream. He began writing stories with a single overarching goal: give the reader something to love.

And he hasn’t looked back since.
                    </Typography>

                </CardContent>
            </Box>
        </Card>
    )
}

export default Biography