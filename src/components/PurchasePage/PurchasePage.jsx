import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../allnovels/allnovels.css';

function PurchasePage({ Cover, Page, Title, Series, SeriesNum, Links }) {
    return (

        <Grid container spacing={2} justifyContent="center" style={{ textAlign: 'center' }}>
            {/* Item for the cover and title */}
            <Grid item xs={12}>
                <Typography variant='h5' color={"white"}>{Title}</Typography>
                <CardMedia
                    component="img"
                    sx={{ width: 270, margin: 'auto', display: 'block' }}
                    image={Cover}
                    alt="novel cover"
                />
            </Grid>

            {/* Nested grid */}
            <Grid item container xs={12} spacing={4} justifyContent="center">

                <Grid item>
                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}>Ebook</Typography>
                    {Links.map((linkItem, index) => (
                        linkItem.Ebook.map((ebook, idx) => (
                            <a key={idx} href={ebook.buylink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '10px 0' }} onClick={() => window.sa_event('Buy_Other')}>
                                <Card sx={{ maxWidth: {xs: 50, sm: 100}, margin: 'auto' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={ebook.linkimg}
                                            alt={`Buy link for ebook - ${idx + 1}`}
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
                                <Card sx={{ maxWidth: {xs: 50, sm: 100}, margin: 'auto' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={paper.linkimg}
                                            alt={`Buy link for paperback - ${idx + 1}`}
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
                                <Card sx={{ maxWidth: {xs: 50, sm: 100}, margin: 'auto' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={hard.linkimg}
                                            alt={`Buy link for hardback - ${idx + 1}`}
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