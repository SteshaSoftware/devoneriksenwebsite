import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./events.css"

const Events = () => {
    return (
        <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "50px" }}>
            <Typography component="div" variant="h5" fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
                UPCOMING EVENTS
            </Typography>
            <Grid container sx={{ marginTop: 1, marginBottom: 30 }} justifyContent={"center"} spacing={4}>
                
       
                <Grid item xs={12} md={6}>
                    <a href="https://www.entertheimaginarium.com/" onClick={() => window.sa_event('event')}>
                        <div data-aos="zoom-out-right" className='p-3 rounded-xl event-card   '>
                            <Typography variant='body1' sx={{ color: "#b79cff", fontSize: 20, fontWeight: "bold" }}>07/19 - 07/21</Typography>
                            <Typography variant='small' sx={{ color: "#ff9b02", fontSize: 20 }}>Imaginarum Louisville, KY</Typography>
                        </div>
                    </a>
                </Grid>
            </Grid>

        </div>
    )
}

export default Events