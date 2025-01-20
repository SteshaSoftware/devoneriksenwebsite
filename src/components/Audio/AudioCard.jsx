import { Box, Card, CardMedia, Grid, Typography, Menu, MenuItem, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import StarButton from '../StarButton/starbutton'
import { Link } from 'react-router-dom';

import '../allnovels/allnovels.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function AudioCard({Audio, Title, Links }) {
    // Extract buylinks from Links -> Audio
    const audioLinks = Links.find(link => link.Audio)?.Audio || [];
    // Determine if there is a direct link
    const direct = audioLinks[0] || null;

    const audioRef = useRef(null); // Reference to the audio element
    const [currentTime, setCurrentTime] = useState(0); // State to track current time
    const [duration, setDuration] = useState(0); // State to track total duration

    // Handle seeking
    const handleSeek = (event, newValue) => {
        if (audioRef.current) {
            audioRef.current.currentTime = newValue;
            setCurrentTime(newValue);
        }
    };

    // Update current time
    const updateTime = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    // Set duration when metadata loads
    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    // State to handle dropdown menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // Open the menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close the menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: 'center', marginTop: '20px' }}
        >
            {/* Horizontal Bar */}
            <Grid item xs={12}>
                <hr
                    style={{
                        border: '1px solid white',
                        width: '100%',
                        marginBlock: '10px'
                    }}
                />
            </Grid>
    
            {/* Title */}
            <Grid item xs={12}>
                <Typography
                    variant="h5"
                    color="white"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    {Title}
                </Typography>
            </Grid>
    
            {/* Audio Player */}
            <Grid item xs={12} sx={{ maxWidth: '600px', margin: '0 auto' }}>
                <Box
                    sx={{
                        width: {sm:'80%', lg:'50%'},
                        maxWidth: '600px',
                        border: '3px solid blue',
                        background: 'white',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        textAlign: 'center',
                        margin: '0 auto', // Center the box
                    }}
                >
                    <Typography
                        variant="h6"
                        color="black"
                        fontWeight="bold"
                        sx={{ marginBottom: '10px' }}
                    >
                        Audiobook Preview
                    </Typography>
                    <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no" // React-safe attribute
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=${Audio}&color=%231a1a1a&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
                        title="Theft of Fire Audiobook Preview"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                    ></iframe>
                </Box>
            </Grid>
    
            {/* Buy Direct Button */}
            {direct && (
                <Grid item xs={12}>
                    <StarButton
                        GlowTxt="Buy Direct — 30% Off"
                        LinkGlow={direct.buylink}
                    />
                </Grid>
            )}
    
            {/* Other Buying Options */}
            {audioLinks.length > 0 && (
                <Grid item xs={12}>
                    <Button
                        aria-controls={open ? 'buylinks-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant="contained"
                        color="primary"
                        sx={{ margin: '20px auto' }}
                    >
                        Other Buying Options
                        <ArrowDropDownIcon
                            sx={{ fontSize: '1.5rem', color: 'inherit' }}
                        />
                    </Button>
    
                    {/* Dropdown Menu */}
                    <Menu
                        id="buylinks-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {audioLinks.map((audio, index) => (
                            <MenuItem
                                key={index}
                                onClick={handleClose}
                                component="a"
                                href={audio.buylink}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                }}
                            >
                                <img
                                    src={audio.linkimg}
                                    alt={audio.buyname || `Link ${index + 1}`}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        border: '2px solid #000000',
                                        marginRight: '8px',
                                        borderRadius: '4px',
                                    }}
                                />
                                {audio.buyname || `Buy Link ${index + 1}`}
                            </MenuItem>
                        ))}
                    </Menu>
                </Grid>
            )}
        </Grid>
    );
    
    
}

export default AudioCard;
