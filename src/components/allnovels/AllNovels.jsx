import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import book1 from "../../images/ToFcover.jpg"
import "./allnovels.css"
import { Link } from 'react-router-dom'

const AllNovels = () => {
    {/* to add novel duplicate grid item code to corresponding </grid>*/ }
    return (
        <Grid container spacing={3} justifyContent={"center"} alignItems={"center"} sx={{ marginBottom: "30px" }}>
            <Grid item md={3} sm={6} xs={12} width={270} >
                <Link to={"/theft-of-fire"} width={270}>
                    <Card className=' zoom' sx={{ marginX: "auto", marginTop: "60px", maxWidth: 270, background: "none" }} >
                        <CardContent sx={{ marginTop: 0, padding: 0, width: 270 }}>
                        </CardContent>
                        <CardActionArea sx={{ padding: 0 }}>
                            <CardMedia
                                component='img'
                                sx={{ width: 270 }}
                                image={book1}
                                alt='unsplash image'
                            />

                        </CardActionArea>

                    </Card>
                </Link>
            </Grid>

        </Grid>
    )
}

export default AllNovels