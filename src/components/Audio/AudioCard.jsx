import { Box, Card, CardMedia, Grid, Typography, Menu, MenuItem, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import StarButton from '../StarButton/starbutton'
import { Link } from 'react-router-dom';

import '../allnovels/allnovels.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function AudioCard({ Cover, CoverAud, Audio, Title, Links }) {
    const direct = Links?.[0]?.Ebook?.[0] || null;
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

    // Extract buylinks from Links -> Ebook
    const ebookLinks = Links.find(link => link.Ebook)?.Ebook || [];

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

                            }}
                        >
                            <Card sx={{ maxWidth: { xs: 150, sm: 200 }, margin: '0 auto' }}>
                                <a
                                    href={direct.buylink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => window.sa_event('Buy_Other')}
                                    style={{ display: 'block', margin: 'auto' }}
                                >
                                    <Card sx={{ margin: 'auto' }}>

                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: '100%', display: 'block',
                                                border: '2px solid #FFFFFF',
                                                borderRadius: '10px'
                                            }}
                                            image={`/static/media/ToFAudio.b6429527c8d635d664ca.png`}
                                            alt={`Purchase ${Title} Audiobook`}
                                        />
                                    </Card>
                                </a>

                            </Card>
                        </Grid>


                        {/* Right Section: Audio Box + Buy Button */}
                        <Grid
                            item
                            xs={12} sm={6}
                            sx={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start', // Align content close to the left
                                paddingLeft: '5px', // Small padding for spacing
                            }}
                        >
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
                            </Box>
                            <StarButton
                                GlowTxt="Buy Direct — 30% Off"
                                LinkGlow={direct.buylink}
                            />
                            {/* Dropdown Button */}
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
                                {ebookLinks.map((ebook, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleClose}
                                        component="a"
                                        href={ebook.buylink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}
                                    >
                                        <img
                                            src={ebook.linkimg}
                                            alt={ebook.buyname || `Link ${index + 1}`}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                border: '2px solid #000000',
                                                marginRight: '8px',
                                                borderRadius: '4px',
                                            }}
                                        />
                                        {ebook.buyname || `Buy Link ${index + 1}`}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );


}


export default AudioCard;