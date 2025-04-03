import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import './PurchaseSale.css'
import '../allnovels/allnovels.css';
import saleimg from '../../images/SaleImg.png'

function PurchaseSale({ Cover, Page, Title, Series, SeriesNum }) {
    return (
        <Grid container spacing={2} justifyContent="center" style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
                <Card sx={{ maxWidth: { xs: 50, sm: 100 }, margin: 'auto' }}></Card>
                <CardMedia
                    component="img"
                    sx={{
                        border: '10px solid #d9d5d5',
                        width: '60%',
                        margin: 'auto',
                        display: 'block',
                    }}
                    image={saleimg}
                    alt="black friday sale"
                />
                <br />
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm="auto">
                        <a
                            href="https://www.amazon.in/Theft-Fire-Orbital-Space-1-ebook/dp/B0CJHQ4LZN?tag=devoneriksen-20"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => window.sa_event('Buy_Other')}
                        >
                            <button className="neon-button">
                            ₹149 IND
                            </button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm="auto">
                        <a
                            href="https://www.amazon.com.au/Theft-Fire-Orbital-Space-1-ebook/dp/B0CJHQ4LZN?tag=devoneriksen-20"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => window.sa_event('Buy_Other')}
                        >
                            <button className="neon-button">
                                $1.49 AUS
                            </button>
                        </a>
                    </Grid>
                    <Grid container spacing={2} marginTop="5px" alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm="auto">
                            <a
                                href="/purchase/theft-of-fire"
                                rel="noopener noreferrer"
                                onClick={() => window.sa_event('Buy_Other')}
                            >
                                <button className="neon-button">
                                    Everyday Price Options
                                </button>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PurchaseSale;