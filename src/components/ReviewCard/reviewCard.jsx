import React from 'react'
import "./reviewCard.css"
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import { Box, Typography } from '@mui/material';
function ReviewCard({ Quote, QuoteAtt}) {
  const quoteHTML = { __html: Quote };
  const quoteattHTML = { __html: QuoteAtt };
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
                        <p className='mt-2'><div dangerouslySetInnerHTML={quoteHTML} /></p>
                        <h3 className='mt-3'><strong style={{fontSize:"22px"}}><div dangerouslySetInnerHTML={quoteattHTML} /></strong></h3>
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