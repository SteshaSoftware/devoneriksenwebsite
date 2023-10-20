import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "./readsample.css";

// Import the CSS styles for 'react-pdf'
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// import pdffile from '../../images/03. The Call of the Wild author Jack London.pdf';
import ReviewCard from '../ReviewCard/reviewCard';
import ReviewCard2 from '../ReviewCard/reviewCard2';
import ReviewCard3 from '../ReviewCard/reviewCard3';
import { Box, Typography } from '@mui/material';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReadSample = () => {
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
      <Box sx={{ width: { xs: "97%", sm: "87%" }, marginX: "auto", marginTop: 5 }}>
        <Typography component="div" variant="h5" mb={-6} fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
          REVIEWS
        </Typography>
      </Box>

      <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel" style={{ width: "100%" }}>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <ReviewCard />
          </div>

          <div class="carousel-item">
            <ReviewCard2 />
          </div>
          <div class="carousel-item">
            <ReviewCard3 />
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>

    </>
  );
};


export default ReadSample;




