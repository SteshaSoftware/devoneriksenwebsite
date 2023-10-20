import React, { useEffect } from 'react'

import BookCard from '../components/BookCard/Bookcard';
import { Box } from '@mui/material'
import bg from "../images/bg.jpg"
import HomeBanner from '../components/homeBanner/HomeBanner';
import Navbar from '../components/navbar/Navbar';
import ReviewCard from '../components/ReviewCard/reviewCard';
import ReadSample from '../components/ReadSample/readSample';

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component loads or refreshes
    window.scrollTo(0, 0);
  }, []);
  return (
      <>
     <HomeBanner />
     <BookCard/>
     
     <ReadSample/>
     
  </>

  )
}

export default Home
