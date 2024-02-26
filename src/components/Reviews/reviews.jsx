import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import ReviewCard from '../ReviewCard/reviewCard';
import { Box, Typography } from '@mui/material';

const Reviews = ({ quotes }) => {

 
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)
  }

  const NextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? pageNumber : pageNumber + 1)
  }
  return (
    <>
      <Box sx={{ width: { md: "80%", xs: "97%", sm: "87%" }, marginX: "auto", marginTop: 5 }}>
        <Typography component="div" variant="h5" mb={-6} fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
          REVIEWS
        </Typography>
      </Box>
     
      <div id="carouselReviewControls" class="carousel slide " data-bs-ride="carousel" style={{ width: "92%", margin: "0 auto" }}>
        <div class="carousel-inner">
          {quotes.map((quote, index) => (
            <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
              <ReviewCard Quote={quote.Quote} QuoteAtt={quote.QuoteAtt} />
            </div>
          ))}

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselReviewControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselReviewControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>

    </>
  );
};


export default Reviews;




