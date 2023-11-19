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
                title= 'Shelf Builders Podcast'
                subtitle = "Devon discusses the books that he owns and which ones inspired him. <br />
                Bonus: Devon opens the first real copy of his book live on camera."
                link="https://www.youtube.com/embed/eGi5wYggjB0"
                date="2023-11-16"
                mediatype= "vid"
          />
           <MediaContent
                title= "Theft of Fire Lands on John Walker's To-Read List"
                subtitle = "<i>Theft of Fire</i> Achieves a Noteworthy Spot on Autodesk Founder's Reading Radar"
                content = 'Devon Eriksen’s Theft of Fire was published on 2023-11-10 in both paperback 
                (linked above) and Kindle editions (not on Kindle Unlimited). The author describes the 
                book, first in a planned series called “Orbital Space”, as in the tradition of hard 
                science space opera of the Golden Age of science fiction. It has been receiving extremely 
                positive reviews from beta readers and hard science fiction authors (many of the 
                libertarian and anarcho-capitalist bent) who have read pre-publication copies. The book, 
                which is 546 pages, around 150,000 words) has, in just two days after release, vaulted 
                to #54 in Hard Science Fiction and #116 in Space Opera Science Fiction on the Amazon 
                Kindle store.'
                link= 'https://scanalyst.fourmilab.ch/t/books-on-the-shelf/3789/9' 
                date = '2023-11-15'
                mediatype= "txt"
            />
           <MediaContent
                title= 'Theft of Fire: Hard Science Fiction. Deep Characters.'
                subtitle = '<i>Theft of Fire</i>, Featured on Iron Age Media'
                content = 'Once upon a time, science fiction was about science and engineering. Was about 
                big ideas for how technology can transform the world. Was about what a high-tech future 
                might look like, and how it might feel to be a real person living there. Was about our 
                hopes and aspirations.
                <br /><br />
                But something happened. Somewhere along the way, our fiction lost hope. Began preaching
                our inevitable failure. Began sifting through the ashes of endless visions of decay. 
                Began lamenting instead of inspiring. Began, above all, lecturing us for daring to have 
                hopes, dreams, and desires, for daring to think that the universe is a better place with 
                humans in it than without, that tomorrow might be better than today.'
                link= 'https://ironage.media/post/theft-of-fire.html' 
                date = '2023-11-15'
                mediatype= "txt"
            />
           <MediaContent
                title= 'How to Plan a Novel Like a Software Engineer'
                subtitle = "Take a peek under the hood as Devon discusses how he builds a novel on the World Anvil podcast"
                link="https://www.youtube.com/embed/InqKCjMZLbs"
                date="2023-11-11"
                mediatype= "vid"
            />
           <MediaContent
                title= 'Fantasy vs Sci Fi'
                subtitle = "Don of the Grendhill Chronicles invites Devon to talk about the link between 
                  Science Fantasy and Fiction and they get distracted along the way"
                link="https://www.youtube.com/embed/QVtKAWrntYI"
                date="2023-11-09"
                mediatype= "vid"
            />
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
                link="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/0bb90d57f47241939f5c956517168bef.m3u8&autostart=false"
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