import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './allnovels.css';

function AllNovels({ Cover, Page, Title, Series, SeriesNum }) {
  return (
    <Grid item md={3} sm={6} xs={12} style={{ textAlign: 'center' }}>
      <Typography variant='h7' className='mb-10'>
        {Series} #{SeriesNum}
      </Typography>
      <Typography variant='h5' color={"white"}>
        {Title}
      </Typography>

      <Link to={`/${Page}`} className="novel-link">
        <Card className="zoom" sx={{ padding: "10px", margin: "auto", maxWidth: 270, background: "none" }}>
          <CardActionArea sx={{ padding: 0 }}>
            <CardMedia
              component="img"
              sx={{ width: 270 }}
              image={Cover}
              alt="novel cover"
            />
          </CardActionArea>
          <CardContent sx={{ marginTop: 0, padding: 0, width: 270 }}>
            {/* Any additional content you want to display */}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default AllNovels;