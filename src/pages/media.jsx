import { Box } from '@mui/material'
import React from 'react'
import MediaDisplay from '../components/Media/MediaDisplay'
import { MediaContent } from '../components/Media/MediaContent'
import { useLocation } from 'react-router-dom';



const Media = () => {

   
 const location = useLocation()

 const filteredMedia = MediaContent.filter((media) => {
  switch (location.pathname) {
    case '/media':
      return true;
    case '/awards':
      return media.tag === 'award';
    case '/reviews':
      return media.tag === 'review';
    case '/interviews':
      return media.tag === 'interview';
    default:
      return false;
  }
});
  return (
    <>

      <div data-aos="fade-down" style={{ width: "100%", marginTop: "0px" }}>
      <Box
        sx={{
      
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
         
           <MediaDisplay media={filteredMedia} />
            
       
    
      </Box>

      </div>

    </>
  )
}

export default Media