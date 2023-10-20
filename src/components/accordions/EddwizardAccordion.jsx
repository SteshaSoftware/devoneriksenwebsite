import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'

const EddwizardAccordion = () => {
  const initialContent = `
  
  
  “An unexpected pleasure, Your Egg-selency. Have you brought us an omelette?”<br/><br/>
  
  His Imperial Majesty Hakkon VI Hafthorsen, his feet over one arm of the Seat of Heroes, sniggers into his winecup, then raises his eyes to sweep the room, and is joined by a belated chorus of somewhat forced titters, from the more silk-swaddled sections of the court.<br/><br/>
  
  On my shoulder, Cerimatheras stirs and hisses under his breath, his tail stiffening where it twines around my shoulders. I reach up to scratch the scales under his chin, muttering soothing noises.<br/><br/>
  
  Doesn’t matter. Today’s the day.<br/><br/>
  
  “I am come to join the council of war… Majesty.” The word sticks in my mouth, but I spit it out. Not much longer now.<br/><br/>
  
  “Join the council of war? You?” Hakkon sneers, “War councils are for thanes and hard men. Men who lift the shield.”<br/><br/>
  
  As if he lifts much more than a winecup these days. I’ve not seen him in the training-yard for many months.<br/><br/>
  
  “Not,” he continues, “for wizened old rune-men who do nothing but conjure eggs.”<br/><br/>
  
  I want to scoff at him, sneer that when I was his age, straight and tall, my joints unknotted by the damp-ache, my hands were never a stranger to the spear, nor my shoulders to the war-hedge, that I pulled the oar on no less than twelve war-voyages, never failing to return laden with thralls and rings of red gold.<br/><br/>
  
  But one does not argue with kings. Not yet, anyway.<br/><br/>
  
  Standing on the right of the throne, Yngvar the Fell-Handed, leaning on his great bearded axe, meets my eyes with a near-imperceptible nod. His men are in place. Now we need bide only for the dragons.<br/><br/>
  
  “Leave us,” Hakkon snaps, with a wave of his hand. “Return to your rookeries and your wyrmlings. We do not need your old man’s mutterings and your womanish cowardice. The dragons will be employed against the Anglaemen as we see fit. Your task is to supply us more. That is all.”<br/><br/>
  
  And once again, one, perhaps a pair or three, will die needlessly, used as shock troops to break the line instead of mobile reserves, feathered by arrows and spears, slowed and drunk with the aconite poison, their wings torn. And once again, you will come to me demanding more dragons, more dragons, as if they did not need time and care to hatch and grow.<br/><br/>
  
  I do not say this. I wait.<br/><br/>
  
  Wait for the sound of wings…<br/><br/>
  
  “Well? Your king has spoken. Get you gone, old man.”<br/><br/>
  
  I hesitate. Yngvar shifts restlessly. Where are they? Can we do this without them? Has he enough men? Can we keep the soldiers outside away until it is done?<br/><br/>
  
  And then I hear it. We all hear it. All the court. The nobles, the thanes, the hard-faced birsirks… everyone gathered at the long table looks up as one.<br/><br/>
  
  Outside, the beat of mighty wings. I know them by sound alone, each one. Aliatheras. Chrysolofax. And last, greatest of all, Vermithrax, the Breaker of Ships and Towers. The tall windows of the Hall of Champions darken as a great shadow blots the sun.<br/><br/>
  
  I meet Yngvar’s eyes, and nod, once. His massive fist taps his chest, once, lightly, not hard enough to ring the steel of his war-coat, a subtle salute. From his belt, his other hand draws a long dirk, its handle black, chased in silver. No one sees it, save the hard men who filter into the hall. Everyone else is looking up.<br/><br/>
  
  They move with purpose. Taking their positions. Watching Yngvar. Watching me. Waiting for my signal. Waiting for their sovereign’s command.<br/><br/>
  
  Bjornir Wyrm-Father.<br/><br/>
  
  First of his line.<br/><br/>
  
  Hail to the king.<br/><br/> 
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
              Capable wizards are hired to entertain the king and you, as one, are selected. However, instead, wizards are recruited to join the war. But your skill is just summoning eggs. Should you offer a nice egg to the king in this trying time? Or 'egg-cel' in the war?
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
        <Typography fontFamily={"Domine, serif"} color={"#ff9b02"} className="">2023-07-07

</Typography>

        </div>
          </div>
    
        </Box>
    
      )
    }

export default EddwizardAccordion

