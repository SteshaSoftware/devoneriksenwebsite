import { Box } from '@mui/material'
import React from 'react'
import MediaContent from '../components/Media/MediaContents'
import SciFi2023 from '../images/DiscoverSciFi.png'

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
                title= 'Why Culture is Upstream of Law, Property Rights, Rent Seekers, AI & Communism'
                subtitle = "Devon talks about why culture is upstream of law, property rights, why we need to push back on bad ideas, AI, and more on The Fort Podcast with Chris Powers."
                link= 'https://www.youtube.com/embed/er7q2X2Cw7w' 
                date = '2024-01-30'
                mediatype= "vid"
            />
           <MediaContent
                title= 'The Danger of Being Right Too Early'
                subtitle = "Guy Swann and Devon discuss the nature of story, the importance of culture, the power of stating the simple truth, the dangers of being right too early, and what we need to do to turn the tide of a dying moral code and protect our values for future generations."
                link= 'https://www.youtube.com/embed/Qxel_AldzYw' 
                date = '2024-01-25'
                mediatype= "vid"
            />
           <MediaContent
                title= 'A Tragedy of Writing'
                subtitle = "A conversation with Hump Day Calls about Conventions, Websites, Writing, Engineering, AI / General Intelligence, Imagination, and Sumo Robots."
                link= 'https://www.youtube.com/embed/c5Yzo717x4E' 
                date = '2024-01-24'
                mediatype= "vid"
            />
           <MediaContent
                title= "Top 5 Best Sci-Fi Novel of 2023"
                subtitle = "Theft of Fire voted #5 in Discover Sci-Fi's best of 2023 list"
                pic = {SciFi2023}
                picalt = 'Discover Sci-Fi'
                link= 'https://discoverscifi.com/best-sci-fi-release-of-2023/' 
                date = '2023-12-28'
                mediatype= "img"
            />
           <MediaContent
                title= 'The Alchemy Lab'
                subtitle = "Devon joins Matt Waterhouse to discuss his thoughts on writing"
                link= 'https://www.youtube.com/embed/nZbVHahcnuY' 
                date = '2023-12-26'
                mediatype= "vid"
            />
           <MediaContent
                title= "Theft of Fire review by John Walker"
                subtitle = "<i>Theft of Fire</i> receives a glowing review on Autodesk Founder's Blog"
                content = '...The discerning reader of science fiction today can choose from a collection 
                of talented, imaginative, and prolific authors to such an extent that it’s like reading 
                Heinlein, Bradbury, Clarke, Asimov, Pohl, and Doc Smith all in their prime, but with ideas and 
                plots as new as today and tomorrow.
                <br/><br/>
                With his first novel, Theft of Fire, Devon Eriksen has jumped in at the top of the game 
                crafting a tale of “hard” science fiction (grounded in plausible science and technology, 
                not magic swords and dragons wrapped in technobabble) with complex, believable 
                characters who interact and grow throughout the tale, and an artificial intelligence who 
                strikes me as far more likely to be what we’ll encounter in our own future than the 
                cartoon tales of mindless monsters or transcendent deities sketched by self-styled 
                “experts” in machine intelligence...'
                link= 'https://scanalyst.fourmilab.ch/t/books-on-the-shelf/3789/11' 
                date = '2023-12-02'
                mediatype= "txt"
            />
          <MediaContent
                title= 'Shelf Builders Podcast'
                subtitle = "Devon discusses the books that he owns and which ones inspired him. <br />
                Also, a surprise delivery and cover reveal!"
                link="https://www.youtube.com/embed/eGi5wYggjB0"
                date="2023-11-16"
                mediatype= "vid"
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
                humans in it than without, that tomorrow might be better than today...'
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
                 writing code...'
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