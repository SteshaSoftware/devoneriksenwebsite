import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import bg from "../images/bg.jpg"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/footer'
import NewsEmail from '../components/Newsletter/newsEmail'
const Layout = () => {

  return (

    <Box
      sx={{
        backgroundSize: 'contain',
        position: "relative",
        // maxHeight: '2000px',
        backgroundRepeat: 'repeat',
        // height: '2000px',
        backgroundImage: `url(${bg})`,
        // Add a background color for debugging if the image is not visible
        // backgroundColor: 'red',
      }}
    >
      <Navbar />
      <Outlet />
      <NewsEmail />
      <Footer />
    </Box>
  )
}

export default Layout
