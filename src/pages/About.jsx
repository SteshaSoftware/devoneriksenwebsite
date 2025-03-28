import React from 'react'
import Biography from '../components/AuthorCard/Biography'
import {Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async';


const About = () => {
  return (
    
    <>
    
<Helmet>
  <title>About Devon Eriksen</title>
  <meta name="description" content="Learn about sci-fi author Devon Eriksen, his background, and writing." />
</Helmet> 
    {/* Visually hidden but semantic h1 for SEO */}
<Typography component="h1" sx={{
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
}}>
  About Devon Eriksen
</Typography>
      <Biography />
    </>
  )
}

export default About
