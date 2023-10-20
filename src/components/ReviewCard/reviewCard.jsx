import React from 'react'
import "./reviewCard.css"
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import { Box, Typography } from '@mui/material';
const ReviewCard = () => {
  return (
    <div data-aos="fade-up"
    data-aos-duration="1000">
      <section class="section-testi">
        <Box sx={{width:{xs:"97%", sm:"87%"}, marginX:"auto"}}>
        
            <div class={`section-test-in`}>
                <BiSolidQuoteLeft className='absolute top-4' size={40} color='#ff9b02'/>
                <div class="row">
                    <div class="col-lg-12 text-white">
                        
                        {/* <Typography variant='h2' sx={{fontSize:"30px"}}>Amazing Customer Service</Typography> */}
                        <p className='mt-2'>A down-on-his-luck asteroid miner, a mysterious heiress, 
                        an ancient alien race--Devon Eriksen's Theft of Fire weaves these classic elements 
                        into a story that feels refreshingly cutting-edge, with prose as lean and no-frills 
                        as the hero's hand-rolled spaceship. The physics are so tight it feels like he spent 
                        hours plotting out each scene with a slide rule, and the characters so lovingly drawn 
                        I believed in them from the first line of dialog--including one of the most convincing
                        post-GPT AIs I've seen in print. If you're tired of stories that preach at you, 
                        insult your intelligence, or feed you member berries like a kid in a zoo, if you're 
                        after a book that promises a good old-fashioned hard sci-fi adventure in the spirit 
                        of Gregory Benford or James S.A. Corey, and then delivers so much more, then this is 
                        one you won't want to miss.</p>
                        <h3 className='mt-3'><strong style={{fontSize:"22px"}}><span>—</span>Johnny Schmidt, author of <i>Failure Mode</i></strong></h3>
                    </div>
                </div>
                <BiSolidQuoteRight className='absolute bottom-6 right-16' size={40}  color='#ff9b02'/>
            </div>
        </Box>
    </section>
    </div>
  )
}

export default ReviewCard