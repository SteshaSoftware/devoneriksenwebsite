import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaGoodreads } from "react-icons/fa"
import { FaRedditAlien } from "react-icons/fa"
import { FaFacebookSquare} from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa"
import { SiSubstack } from "react-icons/si";

const Contact = () => {
    const {
        register,
        formState: { errors },
    } = useForm()


    return (
        <Box sx={{ width: "85%", marginLeft: "auto", marginRight: "auto", marginTop: 5, marginBottom: 5 }}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <Typography variant='h5' component="div" sx={{ color: "white" }}>
                        Feel free to contact me. This form goes directly to my personal email,
                        I try to respond to all of my reader mail. <br /><br />
                        I am available for appearances, please inquire by email.

                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        <Typography color={"#fff"} sx={{ padding: 3 }}>
                            <hr />
                            <Typography sx={{ fontSize: "23px", margin: 1, textAlign: 'center' }}>
                                3712 Ringgold Rd, Suite #264, Chattanooga, TN 37412
                            </Typography>
                            <hr />
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Stack direction="column" spacing={2} alignItems="start" sx={{ maxWidth: 'fit-content' }}>
                            <a href='https://www.goodreads.com/author/show/44421655.Devon_Eriksen' className='icons' target='_blank' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => window.sa_event('Social_GR')}>
                                    <FaGoodreads size={42} />
                                    <Typography fontSize={"23px"} sx={{ marginLeft: 2 }}>DevonEriksen</Typography>
                                </a>
                                <a href='https://devoneriksen.substack.com/' className='icons' target='_blank' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => window.sa_event('Social_SS')}>
                                    <SiSubstack size={42} />
                                    <Typography fontSize={"23px"} sx={{ marginLeft: 2 }}>DevonEriksen.Substack</Typography>
                                </a>
                                <a href='https://twitter.com/Devon_Eriksen_' className='icons' target='_blank' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => window.sa_event('Social_X')}>
                                    <RiTwitterXLine size={42} />
                                    <Typography fontSize={"23px"} sx={{ marginLeft: 2 }}>@Devon_Eriksen_</Typography>
                                </a>
                                <a href='https://www.facebook.com/DevonEriksen/' className='icons' target='_blank' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => window.sa_event('Social_FB')}>
                                    <FaFacebookSquare size={42} />
                                    <Typography fontSize={"23px"} sx={{ marginLeft: 2 }}>Devon_Eriksen</Typography>
                                </a>
                                <a href='https://www.reddit.com/user/devoneriksenwrites/' className='icons' target='_blank' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => window.sa_event('Social_Reddit')}>
                                    <FaRedditAlien size={42} />
                                    <Typography fontSize={"23px"} sx={{ marginLeft: 2 }}>u/DevonEriksenWrites</Typography>
                                </a>
                                <a href='https://www.instagram.com/devoneriksen/' className='icons' target='_blank' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => window.sa_event('Social_Substack')}>
                                    <FaInstagram size={42} />
                                    <Typography fontSize={"23px"} sx={{ marginLeft: 2 }}>@DevonEriksen</Typography>
                                </a>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} p={3}>
                    <Box className="mainbox bg-white rounded-3xl" sx={{ width: "100%", marginLeft: "auto", marginRight: "auto", padding: 4 }}>
                        <Typography variant='h5' component="div" sx={{ color: "black" }}>
                            Send me an email
                        </Typography>
                        <form action="https://formsubmit.co/devoneriksen@protonmail.com" method="POST">
                            <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column", gap: 3 }}>
                                <div className='input-box '>
                                    <input
                                        id="name"
                                        name='name'
                                        required
                                        type="text"
                                        className='border placeholder-gray-600 border-gray-500 p-3 w-full outline-none' placeholder='Name'
                                    />
                                </div>
                                <div className='input-box'>
                                    <input
                                        id="email"
                                        type="email"
                                        className='border placeholder-gray-600 border-gray-500 p-3 w-full outline-none' placeholder='Email' name='email'
                                        required
                                    />
                                </div>
                                <div className='input-box '>
                                    <textarea name='message' required rows={"5"} cols={"30"} className='border placeholder-gray-600 border-gray-500 p-3 w-full outline-none' placeholder='Message' />
                                </div>
                            </Box>
                            <Box sx={{ marginTop: 3 }}>
                                <input type="submit" value="Send Message" className='  p-2 border text-black' style={{ fontSize: "18px", fontWeight: "bold", backgroundColor: "#ff9b02" }} />
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact