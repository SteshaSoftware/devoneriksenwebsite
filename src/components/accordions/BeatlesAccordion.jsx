import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'

const BeatlesAccordion = () => {
    const initialContent = `
    
    “I wuz jest settin’ on the porch, puffin’ smoke-pipe, when Ole Flattop come grooving up, real slow-like. He wuz alus slow, Ole Flattop, cuz he ain’t gotta hurry him none. Got them juju in his eyes, one wut sees the future and the other wut sees the Invisible World. Ole Flattop alus know where he gotta be, in plenty o’time to get hisself there.<br/><br/>
    
    He ein’t in no hurry. He a joker. Most o’ the time, he just do what he please.<br/><br/>
    
    “You knows me, Swamp Witch,” sez he, “an’ Ah knows you.”<br/><br/>
    
    Ein’t like Ole Flattop to be so formal-like, not usual, an’ I ein’t think he wuz proposin’ no hand-fast, neither, cuz even back then, I wuzn’t no spring chicken, with less’un a hunnert years on me an’ all ma teeth in ma head. Sides, he ein’t wear no shoeshine, an’ his raggedy-ass hair warn’t cut, it jest hangin’ down to his knee. So I knowed wut he wuz come for.<br/><br/>
    
    “Time agin, eh? The Conjunction?”<br/><br/>
    
    “Aye, the One and One and One are becoming Three. I got early warnin’.”<br/><br/>
    
    He tapped his finger ’longside that juju eye, like I dun know what he do.<br/><br/>
    
    “So? We alus knew the Walrus was gon’ return. What’s that to do wit’ me?”, I aksed, pluckin’ a stem o’ grass from the yard, an’ weaving a knot in it. A forspecial knot.<br/><br/>
    
    “Walrus ein’t comin’,” he said, “Walrus already here. Alus has been. Hidin’ amongst us. It’s them what’s comin’. His servants. Them ones from the Outside. I seed it.”<br/><br/>
    
    I plucked another grass stem, started weavin’ it in. Jes’ mummin’ to meself and smilin’.<br/><br/>
    
    “Ye talk o’seein lots o’ things. You proud of that. But you dun see everythin’. The waters alus muddy.”<br/><br/>
    
    “Ah sees enouf. Walrus yer problem, too. Walrus ’erebody’s problem. Walrus come outta hidin’, get his demons back, his low-wa, won’t nobody be free. An’ one thing Ah kin tell you, you got to be free.”<br/><br/>
    
    I added a third stem o’ grass to the net.<br/><br/>
    
    “Ye got a plan?”<br/><br/>
    
    “Might do. Might know where to get dat monkey finger.”<br/><br/>
    
    I added stem number four, scoffed at him, a little.<br/><br/>
    
    “Ein’t no good ever come of wishin’ on that thing. Alus twists it around somehow.”<br/><br/>
    
    “Power’s power. We get enuf hoodoos to come together, we do it right now, we mebbe find a way to use it safe, shut them doors to the Outside for another hunnert years.”<br/><br/>
    
    I wove in the last stem o’ grass, hummin’, shrug a little.<br/><br/>
    
    “Ah suppose thas a plan. Can’t say it a good one, but it a plan. Jest one smallish thing wrong.”<br/><br/>
    
    “Wuz that?”<br/><br/>
    
    I stood up, touched my pipe to the grass-net, muttered the Words as it started in smokin'.<br/><br/>
    
    “You come groovin’ up to my hut firs’ off,” I said.<br/><br/>
    
    “So?”, he sed, starin’ at that burnin’ grass net, only now wunderin’ hisself what I wuz doin'.<br/><br/>
    
    An’ then dat smoke whirl up, as dem Patterns form, as the whole worl’ tear open, an’ from the Outside, from between the planes and angles, the warp an’ weave of what real and what ein’t, them Egg-men steps out, multitude horde of dem.<br/><br/>
    
    “I am the Walrus,” I sed.<br/><br/>
    
    `;
   
      const toggleExpanded = () => {
        setExpanded(!expanded);
      };
    
      const [expanded, setExpanded] = useState(false);
      const content = expanded ? initialContent : initialContent.substring(0, 200);
      return (
    
    
        <Box sx={{ width: "75%", marginTop: "20px", marginX: "auto", color: "white" }}>
          <div data-aos="zoom-out-down" data-aos-duration="1500" style={{ backgroundColor: "#d9d5d5", height: "auto", marginBottom: "20px", borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }} className="box-shadow">
            <Box sx={{ bgcolor: "#27285C", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} className=" text-white px-4 py-1">
    
              <Typography sx={{ fontSize: "20px" }}>
              I double-dog dare you to turn the Beatles' most nonsensical song into a cohesive story.
              </Typography>
            </Box>
            <div className='pb-3'>
    
              <div className="px-4 py-2" style={{ color: "#000", fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: content }} />
              <span
                className='px-4 '
                style={{ color: "blue", textDecoration: "underline", cursor: "pointer",fontSize:"18px" }}
                onClick={toggleExpanded}
              >
                {expanded ? 'See less' : 'Read more'}
              </span>
            </div>
            <div className="flex justify-between px-4 py-2 items-center">
        <Typography fontFamily={"Domine, serif"} color={"#ff9b02"} className="">2023-07-06

</Typography>

        </div>
          </div>
    
        </Box>
    
      )
    }

export default BeatlesAccordion
