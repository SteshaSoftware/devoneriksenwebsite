import React from 'react'
import { FaGoodreads } from "react-icons/fa"
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine, RiTwitterXFill } from 'react-icons/ri';
import { Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FaRedditAlien } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { SiSubstack } from "react-icons/si";
import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className='bg-black py-8 px-10 relative w-full bottom-0 mt-10'>
                <Stack direction={{ sm: "column", md: "row" }} justifyContent={"space-between"} alignItems={"center"} spacing={{ xs: 3, md: 0 }}>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "megrim" }}>Devon Eriksen</Typography>
                    <Stack direction={{ md: "row", sm: "column", }} className='text-white' alignItems={"center"} spacing={{ sm: 1, md: 2 }} >
                        <NavLink to={"/"} className="links icons">
                            HOME
                        </NavLink>
                        <NavLink to={"/novels"} className="links">
                            NOVELS
                        </NavLink>
                        <NavLink to={"/writing"} className="links">
                            WRITING
                        </NavLink>
                        <NavLink to={"/events"} className="links">
                            EVENTS
                        </NavLink>
                        <NavLink to={"/media"} className="links">
                            MEDIA
                        </NavLink>
                        <NavLink to={"/about"} className="links">
                            ABOUT
                        </NavLink>
                        <NavLink to={"/contact"} className="links">
                            CONTACT
                        </NavLink>
                        <a href="https://devoneriksen.substack.com" className="links" target="_blank" rel="noopener noreferrer" onClick={() => window.sa_event('Substack')}>
                            SUBSTACK
                        </a>
                    </Stack>
                    <Stack direction="row" spacing={1.5} justifyContent="center" onClick={() => window.sa_event('Social_GR')}>
                        <a href='https://www.goodreads.com/book/show/199142773-theft-of-fire' target='_blank'>
                            <FaGoodreads className='icons' size={30} />
                        </a>

                        <a href='https://devoneriksen.substack.com/' target='_blank' rel="noopener noreferrer" onClick={() => window.sa_event('Social_Substack')}>
                            <SiSubstack className='icons' size={30} />
                        </a>
                        <a href='https://twitter.com/Devon_Eriksen_' target='_blank' onClick={() => window.sa_event('Social_X')}>
                            <RiTwitterXLine className='icons' size={30} />
                        </a>
                        <a href='https://www.facebook.com/DevonEriksen/' target='_blank' onClick={() => window.sa_event('Social_FB')}>
                            <FaFacebookSquare className='icons' size={30} />
                        </a>
                        <a href='https://www.reddit.com/user/devoneriksenwrites/' target='_blank' onClick={() => window.sa_event('Social_Reddit')}>
                            <FaRedditAlien className='icons' size={30} />
                        </a>
                        <a href='https://www.instagram.com/devoneriksen/' target='_blank' onClick={() => window.sa_event('Social_IG')}>
                            <FaInstagram className='icons' size={30} />
                        </a>
                    </Stack>
                </Stack>

                <Typography variant="body1" sx={{ marginTop: 3, color: "white", textAlign: "center", fontFamily: "" }}>
                    Copyright © 2023 Devon Eriksen LLC<br/><hr/>

                <a href="https://drive.google.com/drive/u/2/folders/12mMlKAPSsf485YJirsbG2Zyf1uHbJYvp" className="links" target="_blank" rel="noopener noreferrer" onClick={() => window.sa_event('Substack')}>
                            PRESS KIT
                        </a></Typography>
            </div>
        </>
    )
}

export default Footer