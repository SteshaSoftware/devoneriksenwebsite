import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import buy from '../../images/buy direct.png'
import '../allnovels/allnovels.css';


function PurchasePage({ Cover, Page, Title, Series, SeriesNum, Links }) {
    const direct = Links?.[0]?.Hard?.[0] || null;

    return (

        <Grid container spacing={2} justifyContent="center" style={{ textAlign: 'center' }}>
            {/* Item for the cover and title */}
            <Grid item xs={12}>
                <Typography variant='h5' color={"white"}>{Title}</Typography>
                <Card sx={{ maxWidth: { xs: 50, sm: 100 }, margin: 'auto' }}></Card>
                <CardMedia
                    component="img"
                    sx={{ width: 270, margin: 'auto', display: 'block' }}
                    image={Cover}
                    alt="novel cover"
                /><br />

                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm="auto">
                        <a
                            href={direct.buylink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => window.sa_event('Buy_Other')}
                            style={{ display: 'block', margin: 'auto' }}
                        >
                            <Card sx={{ maxWidth: { xs: 50, sm: 100 }, margin: 'auto' }}>

                                <CardMedia
                                    component="img"
                                    image={direct.linkimg}
                                    alt="Buy Direct"
                                />
                            </Card>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm="auto">

                        <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, fontWeight: 'bold', color: '#ff9b02' }}>BUY DIRECT</Typography>
                        <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, fontWeight: 'bold', color: 'ff9b02' }}>and SAVE</Typography>
                    </Grid>

                </Grid>
            </Grid>

            {/* Nested grid */}
            <Grid item container xs={12} spacing={4} justifyContent="center">

                <Grid item>
                    <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}>Ebook</Typography>
                    {Links.map((linkItem, index) => (
                        linkItem.Ebook.map((ebook, idx) => (
                            <a key={idx} href={ebook.buylink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '10px 0' }} onClick={() => window.sa_event('Buy_Other')}>
                                <Card sx={{ maxWidth: { xs: 50, sm: 100 }, margin: 'auto' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={ebook.linkimg}
                                            alt={`Buy link for ebook`}
                                        />
                                    </CardActionArea>
                                </Card>
                            </a>
                        ))
                    ))}
                </Grid>

                <Grid item>
                    <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}>Paperback</Typography>
                    {Links.map((linkItem, index) => (
                        linkItem.Paper.map((paper, idx) => (
                            <a key={idx} href={paper.buylink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '10px 0' }} onClick={() => window.sa_event('Buy_Other')}>
                                <Card sx={{ maxWidth: { xs: 50, sm: 100 }, margin: 'auto' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={paper.linkimg}
                                            alt={`Buy link for paperback`}
                                        />
                                    </CardActionArea>
                                </Card>
                            </a>
                        ))
                    ))}
                </Grid>
                <Grid item>
                    <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}>Hardback</Typography>
                    {Links.map((linkItem, index) => (
                        linkItem.Hard.map((hard, idx) => (
                            <a key={idx} href={hard.buylink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '10px 0' }} onClick={() => window.sa_event('Buy_Other')}>
                                <Card sx={{ maxWidth: { xs: 50, sm: 100 }, margin: 'auto' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={hard.linkimg}
                                            alt={`Buy link for hardback`}
                                        />
                                    </CardActionArea>
                                </Card>
                            </a>
                        ))
                    ))}
                </Grid>
            </Grid>
        </Grid>

    );
}


export default PurchasePage;