import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import HighlightCard from './highlightcard';
import { Box, Typography } from '@mui/material';
import { HighlightList } from './highlightlist';

const Highlights = ({ quotes = HighlightList.Quotes }) => {

 
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
<Box sx={{ 
  width: { sm: '100%', md: '50%' }, // 90% width on xs screens, 40% on sm screens and above
  margin: '0 auto' // Center the Box
}}>
      <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel" >
        <div class="carousel-inner">
          {quotes.map((quote, index) => (
            <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
              <HighlightCard Pic={quote.Pic} Picalt={quote.Picalt} Link={quote.Link} />
            </div>
          ))}

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
      </Box>
    </>
  );
};


export default Highlights;
