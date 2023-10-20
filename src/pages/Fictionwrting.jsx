import React from 'react'
import CatInvaderAccordion from '../components/accordions/CatInvaderAccordion'
import AdoptedVampireAccordion from '../components/accordions/AdoptedVampireAccordion'
import BeatlesAccordion from '../components/accordions/BeatlesAccordion'
import EddwizardAccordion from '../components/accordions/EddwizardAccordion'
import SwordLessonAccordion from '../components/accordions/SwordLessonAccordion'

const Fictionwrting = () => {
      return (
            <>
                  <CatInvaderAccordion />
                  <AdoptedVampireAccordion />
                  <BeatlesAccordion />
                  <EddwizardAccordion />
                  <SwordLessonAccordion />
            </>
      )
}

export default Fictionwrting

















// import { Box, Typography } from '@mui/material'
// import React from 'react'
// import { NavLink, useLocation } from 'react-router-dom'

// const Fictionwrting = () => {
//       const location = useLocation()
//       // console.log();
//   return (
//     <Box sx={{width:"85%", marginTop:"50px", marginX:"auto", color:"white"}}>
//       {
//       location.pathname === "/writing" ? null : <Typography variant='h5' className='mb-10' sx={{color:"#ff9b02"}}>Fiction</Typography>
//       }

//       <Box sx={{mt:5, mb:9}}>
//             <NavLink to='/writingfiction/cat-invader' className={'font-bold underline hover:text-blue-500 '} style={{fontSize:22, lineHeight:"5px", }}>
//             You're about to go to bed, when you find a woman getting food out of your refrigerator. It turns out, that 'cat' you picked up outside the grocery store, wasn't a cat at all.
//             </NavLink>
//             <Typography className='mt-4'>Jun 15, 2023</Typography>
//             <Typography className='mt-4'>“Turn around slowly, with your hands… wha… the…”</Typography>
//             <Typography className='mt-4'>You’d have stammered too, if you saw what I saw. Somebody breaks into your house, you expect a big scary dude, balaclava, maybe a gun. Or a crowbar for prying windows.</Typography>
//             <Typography className='mt-4'>What I didn’t expect was a bottom. Well, to be honest, it was more of an ass. The kind of ass that writes its own ticket to private events, on top of exactly the pair of legs you’d want for sashaying it in past the velvet ropes. …</Typography>

//       </Box>
//       <Box sx={{mt:5, mb:9}}>
//             <NavLink to={'/writingfiction/sword-lessons'} className={'font-bold underline hover:text-blue-500 '} style={{fontSize:22, lineHeight:"5px", }}>
//             You are an instructor at a magical academy, but you aren't magical at all, but that doesn't mean your classes are easy.
//             </NavLink>
//             <Typography className='mt-4'>Jun 8, 2023</Typography>
//             <Typography className='mt-4'>“Why do we even need to do this? Swords are for peasants.”</Typography>
//             <Typography className='mt-4'>Of course it’s the redhead, her voice as grating and whiny as her face is exquisite. I don’t even turn, just reverse my grip and stab the practice sword backwards, right beneath her sternum. Her whining cuts off as she folds around the hard red oak, and I can feel weight slide off it as she slumps to the floor.</Typography>
//             <Typography className='mt-4'>A collective hiss of astonishment escapes from a gymnasium full of teenage teeth.</Typography>

//       </Box>
//       <Box sx={{mt:5, mb:9}}>
//             <NavLink to={'/writingfiction/egg-wizard'} className={'font-bold underline hover:text-blue-500 '} style={{fontSize:22, lineHeight:"5px", }}>
//             Capable wizards are hired to entertain the king and you, as one, are selected. However, instead, wizards are recruited to join the war. But your skill is just summoning eggs. Should you offer a nice egg to the king in this trying time? Or 'egg-cel' in the war?
//             </NavLink>
//             <Typography className='mt-4'>Jun 7, 2023</Typography>
//             <Typography className='mt-4'>“An unexpected pleasure, Your Egg-selency. Have you brought us an omelette?”</Typography>
//             <Typography className='mt-4'>His Imperial Majesty Hakkon VI Hafthorsen, his feet over one arm of the Seat of Heroes, sniggers into his winecup, then raises his eyes to sweep the room, and is joined by a belated chorus of somewhat forced titters, from the more silk-swaddled sections of the court.</Typography>
//             <Typography className='mt-4'>On my shoulder, Cerimatheras stirs and hisses under his breath, his tail stiffening where it twines around my shoulders. I reach up to scratch …</Typography>

//       </Box>
//       <Box sx={{mt:5, mb:9}}>
//             <NavLink to={'/writingfiction/beatles'} className={'font-bold underline hover:text-blue-500 '} style={{fontSize:22, lineHeight:"5px", }}>
//             I double-dog dare you to turn the Beatles' most nonsensical song into a cohesive story.
//             </NavLink>
//             <Typography className='mt-4'>Jun 6, 2023</Typography>
//             <Typography className='mt-4'>I wuz jest settin’ on the porch, puffin’ smoke-pipe, when Ole Flattop come grooving up, real slow-like. He wuz alus slow, Ole Flattop, cuz he ain’t gotta hurry him none. Got them juju in his eyes, one wut sees the future and the other wut sees the Invisible World. Ole Flattop alus know where he gotta be, in plenty o’time to get hisself there.</Typography>
//             <Typography className='mt-4'>He ein’t in no hurry. He a joker. Most o’ the time, he just do what he please.</Typography>
//             <Typography className='mt-4'>“You knows me, Swamp Witch,” …</Typography>

//       </Box>
//       <Box sx={{mt:5, mb:9}}>
//             <NavLink to={'/writingfiction/adopted-vampire'} className={'font-bold underline hover:text-blue-500 '} style={{fontSize:22, lineHeight:"5px", }}>
//             'Why would a human even adopt me?', said the little girl, 'Don't you know I am a vampire?'
//             </NavLink>
//             <Typography className='mt-4'>All too soon, he pulls his wrist away. I pick my head up, try to follow it, cling to his arm, whining my frustration. My need.</Typography>
//             <Typography className='mt-4'>But the legends aren’t true, at least not in this. I don’t have the strength of ten men. I have the strength of one skinny twelve year old girl. He wrenches his arm free, pushes me down with the other hand, the back of my head back down onto his thighs, pins me as I thrash and hiss and struggle, clawing up at him.</Typography>
//             <Typography className='mt-4'>“I’m hungry!”</Typography>

//       </Box>
//     </Box>
//   )
// }

// export default Fictionwrting


