import React, { useEffect } from 'react'

import MainBook from '../components/BookMain/mainbook';
import { Box } from '@mui/material'
import bg from "../images/bg.jpg"
import HomeBanner from '../components/homeBanner/HomeBanner';
import Navbar from '../components/navbar/Navbar';
import ReviewCard from '../components/ReviewCard/reviewCard';
import Reviews from '../components/Reviews/reviews';
import Highlights from  '../components/Highlights/highlights';
import Starbutton from  '../components/StarButton/starbutton';

import { TheftofFire } from '../components/Books/Orbital-ToF';


const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component loads or refreshes
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '20px',
        }}
      >
        {/*<Starbutton 
          GlowTxt= "AUDIOBOOK KICKSTARTER LATE PLEDGES AVAILABLE!" 
          LinkGlow= "https://www.kickstarter.com/projects/devoneriksen/theft-of-fire-the-audiobook?ref=df8v38" 
          customWidth="700px"  // Add this line to specify the custom width
        />*/}
      </Box>
      
      <Highlights />
      
      <MainBook {...TheftofFire} />
      
      <Reviews quotes={TheftofFire.Quotes} />
    </>
  );
}

export default Home;