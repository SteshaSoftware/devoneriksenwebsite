import { Box } from '@mui/material'
import React from 'react'
import MediaContent from '../components/Media/MediaContents'

const Media = () => {
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
           <div>
            <MediaContent
                title= 'Fire for the People'
                subtitle = 'Interview with Devon by Johnny Schmidt, <i>Failure Mode</i>'
                content = 'Early in October, I sat down with Devon Eriksen, one of a growing number of authors
                 who are side-stepping the No Man’s Land of traditional publishing to take their work 
                 directly to readers. He is the author of <i>Theft of Fire</i>, the first book of his planned Orbital 
                 Space Trilogy, an old-fashioned space adventure with a modern feel—and a refreshingly apolitical 
                 take on everything from AI to the male sex drive. We talk politics, publishing, institutional 
                 decay, Tolkien and religion, Ayn Rand and propaganda, a future without government, the plight 
                 of the working man (and writer), and the weird similarities between composing a novel and 
                 writing code.'
                link= 'https://failuremode.johnnyschmidt.com/p/fire-for-the-people-interview-with' 
                date = '2023-10-23'
                mediatype= "txt"
            />
            <MediaContent
                title="Chattanooga Daily Refresh"
                subtitle="Devon joins the Daily Refresh to talk about <i>Theft of Fire</i> and his inspiration."
                link="http://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/0bb90d57f47241939f5c956517168bef.m3u8&autostart=false"
                date="2023-10-20"
                mediatype= "vid"
            />
            {/* Add more MediaContent components as needed */}
        </div>
    
      </Box>

      </div>

    </>
  )
}

export default Media