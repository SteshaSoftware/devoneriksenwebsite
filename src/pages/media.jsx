import { Box } from '@mui/material'
import React from 'react'
import coming from "../images/coming.png"

const Media = () => {
  return (
    <>
            
      <div data-aos="fade-down"  style={{textAlign:"center", width:"100%",  marginTop:"0px"}}>
            <Box
                component="img"
                sx={{
                    height:{md:"50%", xs:"90%"},
                    width: {md:"50%", xs:"90%"},
                    display: "flex",
                    justifyContent: "center",
                    marginLeft:"auto", marginRight:"auto",
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={coming}
            />
        </div>
    </>
  )
}

export default Media