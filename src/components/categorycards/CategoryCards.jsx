import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import book1 from "../../images/book1over.png"
import { Link } from 'react-router-dom'
import Button from '../Button/button'
import "./categoryCard.css"
import StarButton from '../StarButton/starbutton'
const CategoryCards = () => {
    return (
        <div >
            <Box className='flex  gap-6 ' sx={{ marginTop: "60px", marginBottom: "60px", textAlign:{xs:"center",sm:"start" ,md:"start"}, justifyContent:{xs:"cente", md:"start"}, alignItems:{xs:"center", md:"start"}, flexDirection:{xs:"column", sm:"row", md:"row"} }}>    
                <Box
                    component="img"
                    sx={{ width: 220 }}
                    alt="Theft of Fire by Devon Eriksen book cover"
                    src={book1}
                />

                <Box>
                    <Link to="/theft-of-fire">
                        <Typography variant='h4' color={"white"} sx={{
                            '&:hover': {
                                textDecoration: "underline", color: "   #ff9b02"
                            }
                        }}>Theft of Fire</Typography>
                    </Link>
                    <Typography fontSize={{ xs: 16, sm: 16, md: 24, lg: 24 }} variant='body1' color={"white"} mt={2}>
                    At the frozen edge of the solar system lies a hidden treasure which could spell their 
                    fortune or their destruction—but only if they survive each other first.</Typography>
                    <Typography variant="subtitle1" color="white" component="div" fontSize='16px'>
                    <br /><p><b>Marcus Warnoc</b> has a little problem. His asteroid mining ship—his inheritance, 
                    his livelihood, and his home—has been hijacked by a pint-sized corporate heiress with 
                    enough blackmail material to sink him for good, a secret mission she won’t tell him about, 
                    and enough courage to get them both killed. She may have him dead to rights, but if he 
                    doesn’t turn the tables on this spoiled Martian snob, he’ll be dead, period. He’s not 
                    giving up without a fight.</p>
                    <p><i>He has a plan.</i></p>
                    <p><b>Miranda Foxgrove</b> has the opportunity of a lifetime almost within her grasp if she 
                    can reach it. Her stolen spacecraft came with a stubborn, resourceful captain who refuses 
                    to cooperate—but he’s one of the few men alive who can snatch an unimaginable treasure 
                    from beneath the muzzles of countless railguns. And if this foulmouthed Belter thug 
                    doesn’t want to cooperate, she’ll find a way to force him. She’s come too far to give up 
                    now.</p>
                    <p><i>She has a plan.</i></p>
                    <p>They’re about to find out that a plan is a list of things that won’t happen.</p>
                    </Typography>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:{xs:"center", md:"start"}}}>
                        <StarButton />
                        <Button />

                </Box>

                </Box>

                <Typography component="div" variant="h5" fontSize={{ xs: 20, sm: 20, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#FFFFFF"} style={{ marginTop: '20px' }}>  
  Add to <a href="https://www.goodreads.com/book/show/199142773-theft-of-fire" style={{ color: "#ff9b02" }}>Goodreads</a>
  </Typography>
            </Box>
        </div>
    )
}

export default CategoryCards