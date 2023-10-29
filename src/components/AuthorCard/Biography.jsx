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
                        ABOUT
                    </Typography>
                    <Typography component="div" variant="h5" mt={1.5} fontSize={{ xs: 28, sm: 28, md: 70, lg: 80 }} fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
                    Devon Eriksen
                    </Typography>
                    <Typography variant="subtitle1" color="white" component="div" sx={{ marginTop: { xs: 1.5 }, marginRight: { md: 15 }, fontSize:"17px", fontFamily:"Heebo, sans-serif" }}>
                    Once upon a time, science fiction was about science and engineering. 
                    Was about big ideas for how technology can transform the world. 
                    Was about what a high-tech future might look like, and how it might feel 
                    to be a real person living there. Was about our hopes and aspirations. 
                    <br /><br />
                    But something happened. Somewhere along the way, our fiction lost hope. 
                    Began preaching our inevitable failure. Began sifting through the ashes 
                    of endless visions of decay. Began lamenting instead of inspiring. Began, 
                    above all, lecturing us for daring to have hopes, dreams, and desires, for 
                    daring to think that the universe is a better place with humans in it than 
                    without, that tomorrow might be better than today. 
                    <br /><br />
                    Well, some of us aren't interested in self-flagellation. And we're not 
                    done with the big ideas yet. 
                    <br /><br />
                    I'm Devon Eriksen. And I'm writing the Orbital Space trilogy as a love 
                    letter to every head-high pile of science fiction classics I ever hid in 
                    the back of a public library with. Because I think the era of whining is 
                    over, and humanity is going places again
                    <br /><br /><hr /><br />
                    Devon Eriksen is a life-long reader, with a particular fondness for 
                    classics from the golden age of science fiction, such as "A Mote in God's 
                    Eye" and "Ringworld." While he was dissuaded from becoming a writer in 
                    his childhood, retirement from a career in engineering and the unwavering 
                    support of his loved ones presented an opportunity to pursue his childhood 
                    dream. Eriksen began writing stories with a single overarching goal: to 
                    give the reader something to love. 
                    <br /><br />
                    And he hasn't looked back since.
                    </Typography>

                </CardContent>
            </Box>
        </Card>
    )
}

export default Biography