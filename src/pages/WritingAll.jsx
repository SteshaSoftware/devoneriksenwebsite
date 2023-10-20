import { Box, Typography } from '@mui/material'
import React from 'react'
import WritersThought from './WritersThought'
import Fictionwrting from './Fictionwrting'
import FictionAccordion from '../components/fictionAccordions/FictionAccordion'

const WritingAll = () => {
  return (
    <>
    <Box sx={{width:{xs:"95%", md:"89%"}, marginTop:"50px", marginX:"auto", color:"#ff9b02"}}>
    <Typography variant='h5' className='mb-10'sx={{width:"75%", mx:"auto"}}>All Thoughts</Typography>
    <WritersThought/>

    {/* <Fictionwrting/> */}
    
    <FictionAccordion/>

    </Box>
    </>
  )
}

export default WritingAll
