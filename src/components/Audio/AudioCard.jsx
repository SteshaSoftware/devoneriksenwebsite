import { Box, Card, CardMedia, Grid, Typography, Menu, MenuItem, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import StarButton from '../StarButton/starbutton'
import { Link } from 'react-router-dom';

import '../allnovels/allnovels.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function AudioCard({ Cover, CoverAud, Audio, AudioVid, Title, Links }) {
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
        <Grid container spacing={2} justifyContent="center" style={{ textAlign: 'center' }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">

                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <hr style={{
                        border: '1px solid white', marginTop: '70px',
                        width: '100%'
                    }} />
                    <Grid
                        item xs={12}
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h5" color="white"
                            sx={{ fontWeight: 'bold' }}>
                            {Title}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ maxWidth: '600px', margin: 'auto', marginTop: '15px' }} // Restrict width and center the whole layout
                    >
                        {/* Left Section: Title + Picture */}
                        <Grid
                            item
                            xs={12} sm={6}
                            sx={{
                                textAlign: 'center', // Ensures the text aligns centrally
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', // Align content centrally within this column
                                marginBottom:  { xs: '20px', sm: '0px' }
                            }}
                        >
                            <Card sx={{ maxWidth: { xs: 150, sm: 200 }, margin: '0 auto' }}>
                                {direct ? (
                                    <a
                                        href={direct.buylink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => window.sa_event('Buy_Other')}
                                        style={{ display: 'block', margin: 'auto' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: '100%', display: 'block',
                                                border: '2px solid #FFFFFF',
                                                borderRadius: '10px',
                                              
                                            }}
                                            image={`/static/media/ToFAudio.b6429527c8d635d664ca.png`}
                                            alt={`Purchase ${Title} Audiobook`}
                                        />
                                    </a>
                                ) : (
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: '100%', display: 'block',
                                            border: '2px solid #FFFFFF',
                                            borderRadius: '10px',
                                            
                                        }}
                                        image={`/static/media/ToFAudio.b6429527c8d635d664ca.png`}
                                        alt={`${Title} Audiobook`}
                                    />
                                )}
                            </Card>
                        </Grid>

                        {/* Right Section: Audio Box + Video */}
                        <Grid
                            item
                            xs={12} sm={6}
                            sx={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', // Align content to the center horizontally
                            }}
                        >
                            {AudioVid && (
                                <Box
                                    sx={{
                                        backgroundColor: '#1a1a1a', // Shared background for both title and video
                                        borderRadius: '5px', // Smooth border for the entire section
                                        border: '2px solid #FFFFFF', // Add border around both elements
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        sx={{
                                            padding: '5px',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Audiobook Preview
                                    </Typography>
                                    <iframe
                                        src={AudioVid}
                                        className="vidstyle"
                                        title={`${Title} Video Preview`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            border: 'none', // Remove default iframe border for seamless look
                                            borderRadius: '5px', // Match the border radius for consistency
                                            marginTop: '0px',
                                        }}
                                    ></iframe>
                                </Box>
                            )}
                            {/*This audio only code. Keeping it for now.
                            
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    backgroundColor: '#1a1a1a',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    border: '2px solid #FFFFFF',
                                    width: '300px',
                                    marginBottom: '20px'
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    color="white"
                                >
                                    3 Chapter Preview
                                </Typography>

                                
                                <audio
                                    ref={audioRef}
                                    controls
                                    onTimeUpdate={updateTime}
                                    onLoadedMetadata={handleLoadedMetadata}
                                    style={{
                                        width: '100%',
                                        maxWidth: '300px',
                                        display: 'block',
                                        margin: 'auto',
                                        pointerEvents: 'auto',
                                    }}
                                >
                                    <source src={Audio} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>

                            </Box>*/}
                            {direct && (
                                <StarButton
                                    GlowTxt="Buy Direct — 30% Off"
                                    LinkGlow={direct.buylink}
                                />
                            )}
                            {audioLinks.length > 0 && (
                                <>
                                    <Button
                                        aria-controls={open ? 'buylinks-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            display: 'block', margin: '20px auto',
                                        }}
                                    >
                                        Other Buying Options
                                        <ArrowDropDownIcon sx={{ fontSize: '1.5rem', color: 'inherit' }} />
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
                                                sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}
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
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AudioCard;
