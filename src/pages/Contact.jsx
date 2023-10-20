import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { MdLocationPin } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createContact } from '../store/products';
import { FaGoodreads } from "react-icons/fa"
import {FaRedditAlien} from "react-icons/fa"
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import {FaInstagram} from "react-icons/fa"
import Swal from 'sweetalert2';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const dispatch = useDispatch()
    const addContact = (obj)=>{
        dispatch(createContact(obj))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thankyou, we will contact you as soon as possible',
            showConfirmButton: false,
            timer: 2000
          })
        reset()
        // console.log(obj);
    }

    return (
        <Box sx={{ width: "85%", marginLeft: "auto", marginRight: "auto", marginTop: 5, marginBottom: 5 }}>
            <Grid container>
                <Grid item md={6} xs={12} p={3} sx={{ order: { xs: 1, md: 0 } }}>
                    <Typography variant='h5' component="div" sx={{ color: "white"}}>
                    Feel free to contact me. This form goes directly to my personal email, 
                    I try to respond to all of my reader mail. <br /><br />
                    I am available for appearances, please inquire by email. 
                    </Typography>
                    
                    <Stack direction={"row"} marginTop={{md:5, xs:3}} spacing={2} justifyContent="center" alignItems={"center"}>
                        <Stack spacing={2} direction={"column"}>
                        <a href='https://www.goodreads.com/author/show/44421655.Devon_Eriksen' target='_blank'>
                        <FaGoodreads className='icons' size={42} />
                        </a>
                        <a href='https://www.facebook.com/DevonEriksen/' target='_blank'>
                        <FaFacebookSquare className='icons' size={42} />
                        </a>

                        <a href='https://twitter.com/Devon_Eriksen_' target='_blank'>
                        <RiTwitterXLine className='icons' size={42} />
                        </a>
                        <a href='https://www.reddit.com/user/devoneriksenwrites/' target='_blank'>
                        <FaRedditAlien className='icons' size={42} />
                        </a>
                    
                        <a href='https://www.instagram.com/devoneriksen/' target='_blank'>
                        <FaInstagram className='icons' size={42} />
                        </a>
        
        </Stack>

        <Stack spacing={3} >
            <Typography color={"#fff"} fontSize={"23px"}>Devon_Eriksen</Typography>
            <Typography color={"#fff"} fontSize={"23px"}>DevonEriksen</Typography>
            <Typography color={"#fff"} fontSize={"23px"}>@Devon_Eriksen_</Typography>
            <Typography color={"#fff"} fontSize={"23px"}>u/DevonEriksenWrites</Typography>
            <Typography color={"#fff"} fontSize={"23px"}>@DevonEriksen</Typography>
            
        </Stack>
                    </Stack>

                </Grid>
                <Grid item md={6} xs={12} p={3} >

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
                                    {...register('name')}
                                    required
                                    type="text"
                                    className='border placeholder-gray-600 border-gray-500 p-3 w-full outline-none' placeholder='Name'
                                />
                                   
                                </div>
                                <div className='input-box'>
                                <input
                                    id="email"
                                    {...register('email', { required: "email is required", pattern: { value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message: "email is not valid" } })}
                                    type="email"
                                    className='border placeholder-gray-600 border-gray-500 p-3 w-full outline-none' placeholder='Email' name='email'
                                />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>
                                <div className='input-box '>
                                <textarea name='message' required rows={"5"} cols={"30"} {...register('message')} className='border placeholder-gray-600 border-gray-500 p-3 w-full outline-none' placeholder='Message' />
                                </div>
                            </Box>
                            <Box sx={{ marginTop: 3 }}>
                                <input type="submit" value="Send Message" className='  p-2 border text-black' style={{ fontSize: "18px", fontWeight: "bold", backgroundColor:"#ff9b02" }} />

                            </Box>
                        </form>
                       
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}

export default Contact