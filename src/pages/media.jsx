import { Box } from '@mui/material'
import React from 'react'
import MediaContent from '../components/Media/MediaContents'
import { useLocation } from 'react-router-dom';
import SciFi2023 from '../images/DiscoverSciFi.png'
import AtomicRocket from '../images/AtomicRocket.png'
import Prometheus from '../images/Prometheus.png'


const Media = () => {

   
 // const location = useLocation()

 // const filteredMedia = MediaContent.filter((media) => {
  //  if (location.pathname === '/media') return true;
  //  if (location.pathname === '/awards' && media.tag === 'award') return true;
 //   return false;
 //  });

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
                title= "The Woke Grift"
                subtitle = "Devon Eriksen joins Bryce Eddy as they dive into the world of 
                science fiction and tackle some of today's most contentious topics. From the 
                pervasive influence of 'woke culture' to the origins and impacts of gender 
                ideology rooted in feminism, they explore how these movements have shaped our 
                society."
                pic = "https://www.omnycontent.com/d/clips/5e27a451-e6e6-4c51-aa03-a7370003783c/bbab1106-70f0-4621-9c59-aec901086c3d/865ace4c-8db4-441e-9d5f-b14d0189d182/image.jpg?t=1712707369"
                picalt = 'Bryce Eddy'
                link= 'https://omny.fm/shows/liberty-station/devon-eriksen-the-woke-grift/embed' 
                date = '2024-04-09'
                mediatype= "aud"
                tag= "interview"
            />
           <MediaContent
                title= "Theft of Fire review by A Look Inside"
                subtitle = "Demetria, of A look Inside: A Book Review Blog, has reveiwed over 
                200 books on her website, and gives a glowing review to <i>Theft of Fire</i>."
                content = '<i>Theft of Fire</i> by Devon Eriksen propels readers into a gripping 
                sci-fi space opera brimming with intrigue, action, and high-stakes adventure. Set 
                against the backdrop of the frozen expanse of the solar system, the novel introduces 
                us to Marcus Warnoc, a resourceful asteroid miner whose life is turned upside down 
                when his ship is hijacked by Miranda Foxgrove, a determined corporate heiress with 
                her own secret agenda.
                <br/><br/>
                What ensues is a thrilling game of cat and mouse as Marcus and Miranda find 
                themselves embroiled in a dangerous dance of deception, betrayal, and unexpected 
                alliances. Eriksen masterfully weaves together elements of suspense, humor, and 
                heart, creating a narrative that keeps readers on the edge of their seats from start
                to finish...'
                link= 'https://alookinsidebookreviews.blogspot.com/2024/03/a-review-of-theft-of-fire-by-devon.html' 
                date = '2024-03-09'
                mediatype= "txt"
                tag= "review"
            />
            <MediaContent
                title= 'Infinite Loops'
                subtitle = "Devon joins Devon joins the show to discuss why his book incorporates alien technology, the role of patronage in the digital era, his unusual approach to obtaining feedback, and MUCH more!"
                link= 'https://www.youtube.com/embed/6COwtRiEZ3k' 
                date = '2024-03-07'
                mediatype= "vid"
                tag= "interview"
            />
           <MediaContent
                title= "Theft of Fire review by Daniel Lemire"
                subtitle = "Daniel Lemire is a computer science professor at the Data Science 
                Laboratory of the Université du Québec (TÉLUQ) in Montreal. His research is focused 
                on software performance and data engineering. He is a techno-optimist and a 
                free-speech advocate."
                content = '...<i>Theft of Fire</i> offers a plausible and realistic universe. The 
                characters, Marcus Warnoc and Miranda Foxgrove, are not mere archetypes; they are 
                complex, flawed, and deeply human. Their struggle to trust one another and overcome 
                their own demons is a powerful allegory for the modern human condition. There are 
                class wars, between the very rich and the very poor, but it is not a Marxist story.
                 Marcus might be poor and struggling, but he is never a victim. The rich people can 
                 be bad, but so can the poor people.
                 <br/><br/>
                The world of Theft of Fire is one of contrasts: the cold, unforgiving vacuum of 
                space and the warmth of human connection. It is a testament to the power of 
                storytelling and the enduring appeal of the science fiction genre...'
                link= 'https://lemire.me/blog/2024/02/24/book-review-theft-of-fire-by-devon-eriksen/' 
                date = '2024-02-24'
                mediatype= "txt"
                tag= "review"
            />
           <MediaContent
                title= 'Money is a Measure of F*cks Given'
                subtitle = "Devon joins Robert Breedlove on the What is Money show to discuss the process of writing, the nature of money, the necessity of private property rights, and the flaws of socialism."
                link= 'https://www.youtube.com/embed/Oltd80kD3FQ' 
                date = '2024-02-19'
                mediatype= "vid"
                tag= "interview"
            />
          <MediaContent
                title= "Theft of Fire is Nominated for the Prometheus Award"
                subtitle = 'The Prometheus Award is an annual honor given to best libertarian science fiction novels.
                Past winners include Larry Niven, John Varley and Neal Stephenson. '
                pic = {Prometheus}
                picalt = 'Prometheus Award'
                link= 'https://www.lfs.org/blog/17-varied-works-of-science-fiction-fantasy-and-dystopian-literature-have-been-nominated-for-the-next-prometheus-award-for-best-novel/' 
                date = '2024-02-16'
                mediatype= "img"
                tag= "award"
            />
           <MediaContent
                title= 'THE Bitcoin Podcast'
                subtitle = "Devon talks with Walker about Science Fiction, Culture, AI, Private Property, & F*cks Given"
                link= 'https://www.youtube.com/embed/TlPpJ45AcX0' 
                date = '2024-02-14'
                mediatype= "vid"
                tag= "interview"
            />
           <MediaContent
                title= "Theft of Fire wins the Atomic Rockets Seal of Approval"
                subtitle = 'The Atomic Rockets Seal of Approval is an award given by Winchell Chung for
                "Getting the science 100% right." It has only been awarded to about 20 books, including 
                <i>The Martian</i> and <i>Leviathan Wakes</i>. 
                <br/><br/>
                "The only science fiction award that really matters" —Jim Cambias.'
                pic = {AtomicRocket}
                picalt = 'Atomic Rocket'
                link= 'https://www.projectrho.com/public_html/rocket/sealofapproval.php#firetheft' 
                date = '2024-02-11'
                mediatype= "img"
                tag= "award"
            />
           <MediaContent
                title= 'Review of Theft of Fire'
                subtitle = "Kristoffer Newsom reviews Theft of Fire"
                link= 'https://www.youtube.com/embed/DCOsJ5rd4gA' 
                date = '2024-02-08'
                mediatype= "vid"
                tag= "review"
            />
           <MediaContent
                title= 'Why Culture is Upstream of Law, Property Rights, Rent Seekers, AI & Communism'
                subtitle = "Devon talks about why culture is upstream of law, property rights, why we need to push back on bad ideas, AI, and more on The Fort Podcast with Chris Powers."
                link= 'https://www.youtube.com/embed/er7q2X2Cw7w' 
                date = '2024-01-30'
                mediatype= "vid"
                tag= "interview"
            />
           <MediaContent
                title= 'The Danger of Being Right Too Early'
                subtitle = "Guy Swann and Devon discuss the nature of story, the importance of culture, the power of stating the simple truth, the dangers of being right too early, and what we need to do to turn the tide of a dying moral code and protect our values for future generations."
                link= 'https://www.youtube.com/embed/Qxel_AldzYw' 
                date = '2024-01-25'
                mediatype= "vid"
                tag= "interview"
            />
           <MediaContent
                title= 'A Tragedy of Writing'
                subtitle = "A conversation with Hump Day Calls about Conventions, Websites, Writing, Engineering, AI / General Intelligence, Imagination, and Sumo Robots."
                link= 'https://www.youtube.com/embed/c5Yzo717x4E' 
                date = '2024-01-24'
                mediatype= "vid"
                tag= "interview"
            />
           <MediaContent
                title= "Top 5 Best Sci-Fi Novel of 2023"
                subtitle = "Theft of Fire voted #5 in Discover Sci-Fi's best of 2023 list"
                pic = {SciFi2023}
                picalt = 'Discover Sci-Fi'
                link= 'https://discoverscifi.com/best-sci-fi-release-of-2023/' 
                date = '2023-12-28'
                mediatype= "img"
                tag= "award"
            />
           <MediaContent
                title= 'The Alchemy Lab'
                subtitle = "Devon joins Matt Waterhouse to discuss his thoughts on writing"
                link= 'https://www.youtube.com/embed/nZbVHahcnuY' 
                date = '2023-12-26'
                mediatype= "vid"
                tag= "interview"
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
                tag= "review"
            />
          <MediaContent
                title= 'Shelf Builders Podcast'
                subtitle = "Devon discusses the books that he owns and which ones inspired him. <br />
                Also, a surprise delivery and cover reveal!"
                link="https://www.youtube.com/embed/eGi5wYggjB0"
                date="2023-11-16"
                mediatype= "vid"
                tag= "interview"
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
                tag= "interview"
            />
           <MediaContent
                title= 'Fantasy vs Sci Fi'
                subtitle = "Don of the Grendhill Chronicles invites Devon to talk about the link between 
                  Science Fantasy and Fiction and they get distracted along the way"
                link="https://www.youtube.com/embed/QVtKAWrntYI"
                date="2023-11-09"
                mediatype= "vid"
                tag= "interview"
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
                tag= "interview"
            />
            <MediaContent
                title="Chattanooga Daily Refresh"
                subtitle="Devon joins the Daily Refresh to talk about <i>Theft of Fire</i> and his inspiration."
                link="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/0bb90d57f47241939f5c956517168bef.m3u8&autostart=false"
                date="2023-10-20"
                mediatype= "vid"
                tag= "interview"
            />
            {/* Add more MediaContent components as needed */}
        </div>
    
      </Box>

      </div>

    </>
  )
}

export default Media