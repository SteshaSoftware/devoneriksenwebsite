import {
    Box, Card, CardContent, Typography, Button, Menu, MenuItem} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pirate from "../images/Pirate.png";

import { FaArrowCircleDown, FaArrowCircleRight } from 'react-icons/fa';
import BTC from "../images/PirateBTC.png";
import ETH from "../images/PirateETH.png";
import BCH from "../images/PirateBCH.png";
import WalletPopup from '../components/Widgets/walletpopup';

const Pirate = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [btcDialogOpen, setBtcDialogOpen] = useState(false);
    const [ethDialogOpen, setEthDialogOpen] = useState(false);
    const [bchDialogOpen, setBchDialogOpen] = useState(false);
    const dropdownOpen = Boolean(anchorEl);

    const handleDropdownClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setAnchorEl(null);
    };



    return (
        <Card sx={{ marginLeft: "auto", marginRight: "auto", display: 'flex', flexDirection: { md: "row", xs: "column" }, textAlign: "center", background: "none", width: { sm: "90%", md: "60%" }, justifyContent: "space-between", alignItems: "center", padding: 0 }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1, md: 0 } }}>
                <CardContent sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "column" }} data-aos="fade-right">
                    <Typography component="div" variant="h5" fontSize="20" fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
                        HERE BE PIRATES
                    </Typography>

                    <img
                        src={pirate}
                        alt="Space Pirate Jolly Roger"
                        style={{
                            width: "500px",
                            height: "auto",
                            marginTop: "1rem",
                            alignSelf: "center"
                        }}
                    />

                    <Typography component="div" variant="h5" mt={1.5} fontSize={{ xs: 30, md: 60 }} fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
                        Arrr ya wanting more Orbital Space?
                    </Typography>

                    <Typography variant="subtitle1" color="white" component="div" sx={{ marginTop: { xs: 1.5 }, fontSize: { sm: "17px", md: "20px" }, fontFamily: "Heebo, sans-serif" }}>
                        Devon Eriksen is a fully independent author—no publishers, no corporate backing—just him and his readers.
                        <br /><br />
                        If you’d like to help bring more Orbital Space stories into the world, here are some ways to show your support.
                    </Typography>
                    <Typography component="div" variant="h5" mt={1.5} fontSize="30px" fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
                        Ways to Give
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        {/* Buy DRM Free Button */}
                        <a
                            href="https://devoneriksen.myshopify.com/products/theft-of-fire-e-book"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => window.sa_event('AboutBuy')}
                        >
                            <button className="buy-now-button"
                                style={{ 
                                    height: '55px',
                                    width: '190px' }}>
                                Buy DRM Free <FaArrowCircleRight />
                            </button>
                        </a>

                        {/* Crypto Dropdown Button */}
                        <div>
                            <button
                                className="buy-now-button"
                                style={{ 
                                    height: '55px',
                                    width: '190px' }}
                                onClick={handleDropdownClick}
                                aria-controls={dropdownOpen ? 'crypto-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen ? 'true' : undefined}
                            >
                                Crypto <FaArrowCircleDown style={{ marginLeft: '8px' }} />
                            </button>

                            <Menu
                                id="crypto-menu"
                                anchorEl={anchorEl}
                                open={dropdownOpen}
                                onClose={handleDropdownClose}
                            >
                                <MenuItem
                                    onClick={handleDropdownClose}
                                    component="a"
                                    href="https://cash.app/$AnEriksenWife"
                                    target="_blank"
                                    sx={{
                                        padding: '10px 20px',
                                        width: '100%',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box sx={{ width: '100%' }}>
                                        <b>CashApp</b>
                                    </Box>

                                </MenuItem>
                                <MenuItem onClick={() => setBtcDialogOpen(true)}
                                 sx={{
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    width: '100%',
                                    padding: '10px 20px',
                                    transition: 'color 0.2s ease',
                                    '&:hover': {
                                      color: '#0d6efd', 
                                      cursor: 'pointer',
                                    },
                                  }}><b>Bitcoin</b></MenuItem>
                                <WalletPopup
                                    open={btcDialogOpen}
                                    onClose={() => setBtcDialogOpen(false)}
                                    title="BTC Wallet"
                                    address="bc1qlxa7w0tr5fcfuvug0qnvtvnur6ycu35s4hda2q"
                                    qrImage={BTC}
                                />
                                <MenuItem onClick={() => setEthDialogOpen(true)}sx={{
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    width: '100%',
                                    padding: '10px 20px',
                                    transition: 'color 0.2s ease',
                                    '&:hover': {
                                      color: '#0d6efd', 
                                      cursor: 'pointer',
                                    },
                                  }}><b>Ethereum</b></MenuItem>
                                <WalletPopup
                                    open={ethDialogOpen}
                                    onClose={() => setEthDialogOpen(false)}
                                    title="ETH Wallet"
                                    address="0x82d64b77de7Aee33151c4E44013BC49FB76DC0E1"
                                    qrImage={ETH}
                                />
                                 <MenuItem onClick={() => setBchDialogOpen(true)}sx={{
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    width: '100%',
                                    padding: '10px 20px',
                                    transition: 'color 0.2s ease',
                                    '&:hover': {
                                      color: '#0d6efd', 
                                      cursor: 'pointer',
                                    },
                                  }}><b>Bitcoin Cash</b></MenuItem>
                                <WalletPopup
                                    open={bchDialogOpen}
                                    onClose={() => setBchDialogOpen(false)}
                                    title="BCH Wallet"
                                    address="bitcoincash:qrkl8rg95y3xuwcp0wkvj88pcu7g4gqu6quknga2u9"
                                    qrImage={BCH}
                                />
                                <MenuItem
                                    onClick={handleDropdownClose}
                                    component="a"
                                    href="https://tapswap.cash/trade/798666058f90dd5088009dc44c4eb9f20da65382ab37da50f4983eb9c792ea62"
                                    target="_blank"
                                    sx={{
                                        padding: '10px 20px',
                                        width: '100%',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box sx={{ width: '100%' }}>
                                        <b>Tap Swap</b>
                                    </Box>

                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        handleDropdownClose();
                                    }}
                                    component={Link}
                                    to="/contact"
                                    sx={{
                                        padding: '10px 20px',
                                        width: '100%',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box sx={{ width: '100%' }}>
                                        <b>Other:</b><br />
                                        <u>Let Us Know!</u>
                                    </Box>
                                </MenuItem>
                            </Menu>
                        </div>

                    </div>
                    <Typography variant="subtitle1" color="white" component="div" sx={{ marginTop: "20px", fontSize: "17px", fontFamily: "Heebo, sans-serif" }}>

                        <hr />
                    </Typography>
                    <Typography component="div" variant="h5" mt={1.5} fontSize="30px" fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
                        Other Ways to Lend a Hand
                    </Typography>
                    <Typography variant="subtitle1" color="white" component="div" sx={{ fontSize: { sm: "17px", md: "20px" }, fontFamily: "Heebo, sans-serif" }}>
                        <br />
                        Not enough readers know about Theft of Fire—yet. You can help change that and introduce someone to their next favorite sci-fi read.
                        <br /><br />
                        Do what you can — every bit helps.
                        <br /><br />
                        <Typography variant="subtitle1" component="div" color="white" sx={{ fontSize: { sm: "17px", md: "20px" }, fontFamily: "Heebo, sans-serif", textAlign: 'left' }}>
                            <ul style={{
                                color: 'white', listStyleType: 'disc',
                                width: '80%',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}>
                                <li><b>Libraries:</b> Request Theft of Fire: Orbital Space #1 (published 11/11/2023) to be added to your local library's cataloge. See their website for details!</li>
                                <br />
                                <li><b>Recommend to Others:</b> Recommend ToF on social media, to friends, coworkers, family and more.</li>
                                <br />
                                <li><b>Promote:</b> Have an audience? Recommend ToF on your podcast, newsletter, whatever! Want to have Devon Eriksen appear as a guest?
                                    <a
                                        href="/contact"
                                        rel="noopener noreferrer"
                                        style={{ color: '#4ec2f0', textDecoration: 'underline', marginLeft: '0.3em' }}
                                    >
                                        Send him a message here.
                                    </a>
                                </li>
                                <br />
                                <li>
                                    <b>Reviews:</b> Leave a review on

                                    <a
                                        href="https://www.goodreads.com/book/show/199142773-theft-of-fire"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#4ec2f0', textDecoration: 'underline', marginLeft: '0.3em' }}
                                    >
                                        Goodreads
                                    </a>,
                                    <a
                                        href="https://app.thestorygraph.com/book_reviews/df31020b-b839-4d79-a511-2fb409604cea"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#4ec2f0', textDecoration: 'underline', marginLeft: '0.3em' }}
                                    >
                                        StoryGraph
                                    </a>,
                                    <a
                                        href="https://fable.co/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#4ec2f0', textDecoration: 'underline', marginLeft: '0.3em' }}
                                    >
                                        Fable
                                    </a>, etc.
                                </li>
                            </ul>
                        </Typography>
                    </Typography>

                </CardContent>
            </Box>
        </Card>
    );
};

export default Pirate;

