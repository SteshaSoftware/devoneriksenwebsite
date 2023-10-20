import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'

const SwordLessonAccordion = () => {
    const initialContent = `
    
    “Why do we even need to do this? Swords are for peasants.”<br/><br/>
    
    Of course it’s the redhead, her voice as grating and whiny as her face is exquisite. I don’t even turn, just reverse my grip and stab the practice sword backwards, right beneath her sternum. Her whining cuts off as she folds around the hard red oak, and I can feel weight slide off it as she slumps to the floor.<br/><br/>
    
    A collective hiss of astonishment escapes from a gymnasium full of teenage teeth.<br/><br/>
    
    She’s going to try something. Of course she is. There’s one in every class. But I don’t hurry. I rest the practice sword over one shoulder and turn slowly, in control, sweeping my eyes across the class. Some look down, some meet my gaze. One skinny blond boy glares at me, fists clenched. Boyfriend, perhaps? Or just an admirer who very much wishes to be?<br/><br/>
    
    No matter. I’ve noted your face now, my lad. I’ll be watching you. And silently deploring your poor taste in female temperament.<br/><br/>
    
    With a gasp, the redhead reinflates her lungs, not bothering to rise from the floor before she speaks.<br/><br/>
    
    “X’thnarras - ack -”<br/><br/>
    
    She collapses in a fit of coughing as the red oak flicks out, plants a rough caress across her lovely white neck.<br/><br/>
    
    “Fanskar’s Fourth Deplorable Word has seven syllables, Miss… ah… Warrenthorpe, is it? Do you fancy your chances of getting them all out?”<br/><br/>
    
    She makes no reply, just looks daggers at me, clutching her throat and gagging far harder than need be. A calculating one, this little termagant. If you can’t win, play to the sympathies of the crowd. Silly girl. You think I want their love?<br/><br/>
    
    Hate is the better teacher.<br/><br/>
    
    “I am, as you say, Miss Warrenthorpe, a peasant. I drew my first breaths in a charcoal burner’s hut in the Seitforest, I and my three brothers and our parents sleeping on a dirt floor. And you, I believe, are the niece of a baronet… no, that’s right, an earl. And a third-year student of the High Art, bound, no doubt, for a shining career in the Magistrati.”<br/><br/>
    
    Red rises to her knees, one hand on her throat still, her eyes flicking this way and that to her classmates. No knights in shining armor emerge from the crowd.<br/><br/>
    
    “And yet there you lie, felled by a peasant. With a stick. You there, in the back, Mr. DeVries. Tell your classmates what grievous error has felled young Miss Warrenthorpe.”<br/><br/>
    
    The fat non-entity with the greasy black hair shifts uncomfortably, refusing to look at me. “Couldn’t say, Master Nonesuch.”<br/><br/>
    
    “Yes, Mr. Devries, that is correct, you could not say. But that is only because you are a moron. Help him out, Mr. Winter.”<br/><br/>
    
    “Being disrespectful to a Master, Master Nonesuch?”<br/><br/>
    
    “Wrong, Winter, and no one likes a suck-up, least of all me. What about the rest of you lot? Anyone else care to venture a guess? Or are you all too entirely occupied with shoe-gazing?”<br/><br/>
    
    “Believing that a Master is a gentleman. And not a petty, sadistic bully who strikes women by surprise. Master Nonesuch. Sir.”<br/><br/>
    
    It’s the blond. I cannot for the life of me recall his name. Looks like there’s some iron in him after all, at least a little.<br/><br/>
    
    “Boldly tongue-wagged, Sir Knight. I suspect the lady will not reward you. The special powers of the Blackbriar line are dependent on seven times seven days of prior celibacy.”<br/><br/>
    
    He blushes furiously, and a few titters escape the crowd. Hmmm. Was hoping for silence. Must work harder to spur their hate.<br/><br/>
    
    “But by an astonishing coincidence, you are actually correct. Miss Warrenthorpe… oh, stop milking it and climb to your feet, lass, the gods are not impressed… young Miss Warrenthorpe sneers at swordplay because she assumes herself safe. Here in within the walls of the Collegium, perhaps. But outside… not so much. Will the Winged Knives stay their hidden blades because she is a woman? Will the bravosi of rival Houses respect the blue tint of her blood? Will the Witchhunters of Alamakia have mercy on her youth?<br/><br/>
    
    “They will not. To be a Magister, or a Magistera, is to be important, and to be important is to be a target. Will you weave Ideal Shapes, and fumble with your reagents, while a mob kicks down your door? Will your House guards always be quick enough to save you? Are you faster than an arrow?<br/><br/>
    
    “No? Well, scorn the sword if you are foolish enough, but you will learn the sword. You will learn both broadsword and rapier, the dueling cane, and the dagger and the blackjack and Thieves’ Chain besides. Ladies, if I may apply optimistically apply any such term to such a pack of spoiled and unrefined sluts, will learn the stiletto and the hair-spike and the war fan. A little of bare-handed defense, and grappling, but we shall not waste too much time on fisticuffs. It is an art for slaves. Free men carry weapons.<br/><br/>
    
    “Curse me if you like, especially you, there, young fellow. Nurse your bruises, fetch out your alembics and your candles and scrolls, in the privacy of your chambers, and invoke doom down upon me if you wish. You will find I am well warded against any invocation you can raise. If you crave satisfaction, you would be wise to listen well, and make a friend of the sword.”<br/><br/>
    
    Dead silence. Shuffling feet. Resentful gazes. Good. Grind in the lesson a little more, and they’ll laugh no more at my jokes, such as they are. An example, perhaps? Yes. I know just the one.<br/><br/>
    
    “Very well, if no one has any other stupid and callow remarks, we shall proceed to first principles. Miss Warrenthorpe, if you are quite recovered, you may take this practice weapon…”<br/><br/>
    
    I extend it to her, hilt first.<br/><br/>
    
    “… and endeavor to seek revenge. Strike me as you will, if you can.”<br/><br/>
    
    She grins as she grasps the sword, wincing as she stretches the spreading bruise along her exquisite aristocratic jawline. I step away, empty hands spread as she stalks towards me, malice and resentment glinting in those pretty blue eyes.<br/><br/>
    
    Poor foolish girl. She’ll learn. They all eventually do.
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
              You are an instructor at a magical academy, but you aren't magical at all, but that doesn't mean your classes are easy.
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
        <Typography fontFamily={"Domine, serif"} color={"#ff9b02"} className="">2023-07-08

</Typography>

        </div>
          </div>
    
        </Box>
    
      )
    }

export default SwordLessonAccordion
