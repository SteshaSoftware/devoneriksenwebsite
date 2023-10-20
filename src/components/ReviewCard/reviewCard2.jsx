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
                        <p className='mt-2'>This is one hell of a yarn. It has the character development of 
                        John Varley, the plot twists of Robert E Taylor, battle scenes that are reminiscent of 
                        Jack Campbell, and the dramatic angst of Stephen R. Donaldson. Behind it all lurks an 
                        irreverent Nivenesque humor.<br /><br />

                        This story grabbed me in minutes and called me back whenever I set it down.</p>
                        <h3 className='mt-3'><strong style={{fontSize:"22px"}}><span>—</span>Uncle Bob Martin, author of <i>Clean Code</i></strong></h3>
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