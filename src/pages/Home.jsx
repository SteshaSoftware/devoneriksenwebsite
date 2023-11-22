import React, { useEffect } from 'react'

import MainBook from '../components/BookMain/mainbook';
import { Box } from '@mui/material'
import bg from "../images/bg.jpg"
import HomeBanner from '../components/homeBanner/HomeBanner';
import Navbar from '../components/navbar/Navbar';
import ReviewCard from '../components/ReviewCard/reviewCard';
import Reviews from '../components/Reviews/reviews';

import { TheftofFire } from '../components/Books/Orbital-ToF';

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component loads or refreshes
    window.scrollTo(0, 0);
  }, []);
  return (
      <>
     <HomeBanner />
     <MainBook {...TheftofFire} />
     
     <Reviews {...TheftofFire} />
     
  </>

  )
}

export default Home
