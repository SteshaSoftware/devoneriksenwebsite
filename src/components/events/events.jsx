import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./events.css"

const Eventss = () => {
    return (
        <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "50px" }}>
            <Typography component="div" variant="h5" fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
                UPCOMING EVENTS
            </Typography>
            <Grid container sx={{ marginTop: 1, marginBottom: 30 }} justifyContent={"center"} spacing={4}>
                <Grid item xs={12} md={6}>
                    <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.twitch.tv%2Fworldanvil&ust=1698700740000000&usg=AOvVaw1uhQPuOfp590uo4AfjPxZl" target='_blank' >
                        <div  data-aos="zoom-out-left" className='p-3 rounded-xl event-card'>
                            <Typography variant='body1' sx={{ color: "#b79cff", fontSize: 20, fontWeight: "bold" }}>11/11: 12pm - 1pm EST</Typography>
                            <Typography variant='small' sx={{ color: "#ff9b02", fontSize: 20 }}>World Anvil: Official Launch Live Stream</Typography>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a href="https://chattacon.org/" target='_blank' >
                        <div  data-aos="zoom-out-left" className='p-3 rounded-xl event-card'>
                            <Typography variant='body1' sx={{ color: "#b79cff", fontSize: 20, fontWeight: "bold" }}>01/12 - 01/14</Typography>
                            <Typography variant='small' sx={{ color: "#ff9b02", fontSize: 20 }}>ChattaCon Chattanooga, TN</Typography>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a href="https://www.confinementcon.org/">
                        <div data-aos="zoom-out-right" className='p-3 rounded-xl event-card   '>
                            <Typography variant='body1' sx={{ color: "#b79cff", fontSize: 20, fontWeight: "bold" }}>03/01 - 03/03</Typography>
                            <Typography variant='small' sx={{ color: "#ff9b02", fontSize: 20 }}>ConFinement Lebanon, TN</Typography>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a href="https://www.libertycon.org/">
                        <div data-aos="zoom-out-left" className='p-3 rounded-xl event-card   '>
                            <Typography variant='body1' sx={{ color: "#b79cff", fontSize: 20, fontWeight: "bold" }}>06/21 - 06/23 </Typography>
                            <Typography variant='small' sx={{ color: "#ff9b02", fontSize: 20 }}>LiberyCon Chattanooga, TN</Typography>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a href="https://writerscantina.org/">
                        <div data-aos="zoom-out-right" className='p-3 rounded-xl event-card '>
                            <Typography variant='body1' sx={{ color: "#b79cff", fontSize: 20, fontWeight: "bold" }}>06/28 - 06/29</Typography>
                            <Typography variant='small' sx={{ color: "#ff9b02", fontSize: 20 }}>Writer’s Cantina West Valley City, UT</Typography>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a href="https://www.entertheimaginarium.com/">
                        <div data-aos="zoom-out-left" className='p-3 rounded-xl event-card   '>
                            <Typography variant='body1' sx={{ color: "#b79cff", fontSize: 20, fontWeight: "bold" }}>07/19 - 07/21</Typography>
                            <Typography variant='small' sx={{ color: "#ff9b02", fontSize: 20 }}>Imaginarum Louisville, KY</Typography>
                        </div>
                    </a>
                </Grid>
            </Grid>

        </div>
    )
}

export default Eventss