import React, { useEffect } from 'react';
import "./navbar.css"
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Stack,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  // Menu,
  Grid,
  Typography,
  Divider,
} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
// import Dropdownn from './dropdown';
import { BsChevronDown } from 'react-icons/bs';
import { FaArrowCircleRight } from 'react-icons/fa';
import NavBarButton from './navbarbutton';
import DropdownMenu from './DropdownMenu';

const settings = ['First Page', 'Latest Page', 'Archive'];



const Navbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isDraweropem, setDrawerOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { pathname } = useLocation()



  return (
    <>
      <Box width={{ md: "100%", xs: "100%" }} sx={{ marginLeft: "auto", marginRight: "auto", width: "100%" }} >

        <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: 'none' }}>
          <Toolbar sx={{ backgroundColor: "transparent", color: "#FFFFFF" }}>
            <Box display={{ xs: "flex", md: "none" }} sx={{ width: "100%", alignItems: "center" }}  >

              <IconButton
                size='large'
                edge="start"
                sx={{ color: "white" }}
                aria-label='meniIcon'
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>


              <Typography variant="h4" sx={{ color: "white", width: "100%", textAlign: "center", fontFamily: "megrim" }}><b>Devon Eriksen</b>  </Typography>


            </Box>
            <Drawer anchor='left' open={isDraweropem} onClose={() => setDrawerOpen(false)} PaperProps={{
              sx: {
                backgroundColor: "#000",
                border: "1px solid #0a291cd6"
              }
            }} >
              <Stack >
                <IconButton
                  size='large'
                  // edge= "end"
                  htmlColor="white"
                  aria-label='meniIcon'
                  onClick={() => setDrawerOpen(false)}
                  sx={{ marginLeft: "auto", marginRight: 0.5, color: "white", position: "absolute", right: 0 }}
                >
                  <CloseIcon htmlColor='white' />
                </IconButton>

              </Stack>
              <Stack direction={"column"} width="330px" height={"100%"} role="presentation" >

                {/* <Link to={"/"} sx={{textDecoration:"none"}}> */}
                <Typography variant="h4" sx={{ color: "white", marginTop: 6, marginBottom: 3, textAlign: "center", fontFamily: "megrim" }}>Devon Eriksen</Typography>
                {/* <img src={logo} sx={{padding:2}} alt="" height={100} width={90} /> */}
                {/* </Link> */}


                <Link to='/'>
                  <Typography className={`${pathname === "/" ? "activeClass" : "noActiveClass"} font-style dropdown`} sx={{ color: "#FFFFFF", marginLeft:'8px', marginBottom:'10px', fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>
                    HOME
                  </Typography>
                </Link>
                <Link to='/sale'>
                  <Typography className={`${pathname === "/sale" ? "activeClass" : "noActiveClass"} font-style dropdown`} sx={{ color: "#FFFFFF", marginLeft:'8px', marginBottom:'10px', fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>
                    SALE
                  </Typography>
                </Link>
                <Link to={"/novels"}>
                  <Box sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300, px: 1 }} >
                    <div className="antialiased">
                      <div className="group">
                        <div
                          className={`${pathname === "/novels" ? "activeClass" : "noActiveClass"} font-style  dropdown rounded inline-flex items-center`}
                        >
                          <span className="mr-1 ">NOVELS</span>
                          {/*<BsChevronDown />*/}
                        </div>
                        <ul className="absolute z-10 hidden text-gray-700 pt-1 group-hover:block">
                          {/* <li className="">
                            <Link
                              to={"/orbital-space"}
                              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"

                            >
                              Orbital Space
                            </Link>
                          </li>
                          {/*<li className="">
                            <a
                              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              2nd Category
                            </a>
                        </li>*/}
                        </ul>
                      </div>
                    </div>
                  </Box>
                </Link>
                <Link to='/writing'>
                  <Box sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300, px: 1, py: 1 }}><div className="antialiased">
                    <div className="group">
                      <div
                        className={`${pathname === "/writing" ? "activeClass" : "noActiveClass"} font-style  dropdown rounded inline-flex items-center`}
                      >
                        <span className="mr-1 ">WRITING</span>
                        {<BsChevronDown />}
                      </div>
                      <ul className="absolute z-10 hidden text-gray-700 pt-1 group-hover:block">
                        {<li className="">
                          <Link
                            to={"/writingupdates"}
                            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                            Book Updates
                          </Link>
                        </li>}
                        {<li className="">
                          <Link to={"/writingcraft"}
                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Crafting Stories
                          </Link>
                        </li>}
                        {<li className="">
                          <Link to={"/writingfiction"}
                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Short Fiction
                          </Link>
                        </li>}
                      </ul>
                    </div>
                  </div>
                  </Box>
                </Link>
                <Link to='/events'>
                  <Typography className={`${pathname === "/events" ? "activeClass" : "noActiveClass"} font-style dropdown`} sx={{ color: "#FFFFFF", marginLeft:'8px', marginBottom:'10px', fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>
                    EVENTS
                  </Typography>
                </Link>
                <Link to='/media'>
                  <Box sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300, px: 1, py: 1 }}><div className="antialiased">
                    <div className="group">
                      <div
                        className={`${pathname === "/media" ? "activeClass" : "noActiveClass"} font-style  dropdown rounded inline-flex items-center`}
                      >
                        <span className="mr-1 ">MEDIA</span>
                        {<BsChevronDown />}
                      </div>
                      <ul className="absolute z-10 hidden text-gray-700 pt-1 group-hover:block">
                        {<li className="">
                          <Link
                            to={"/awards"}
                            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                            Awards
                          </Link>
                        </li>}
                        {<li className="">
                          <Link to={"/reviews"}
                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Reviews
                          </Link>
                        </li>}
                        {<li className="">
                          <Link to={"/interviews"}
                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Interviews
                          </Link>
                        </li>}
                      </ul>
                    </div>
                  </div>
                  </Box>
                </Link>
                <Link to='/about'>
                  <Typography className={`${pathname === "/about" ? "activeClass" : "noActiveClass"} font-style dropdown`} sx={{ color: "#FFFFFF", marginLeft:'8px', marginBottom:'10px', fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>
                    ABOUT
                  </Typography>
                </Link>

                <Link to='/contact'>
                  <Typography className={`${pathname === "/contact" ? "activeClass" : "noActiveClass"} font-style dropdown`} sx={{ color: "#FFFFFF", marginLeft:'8px', marginBottom:'10px', fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>
                    CONTACT
                  </Typography>
                </Link>
                <a
                  href="https://devoneriksen.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography className="font-style dropdown" sx={{ color: "#FFFFFF", marginLeft:'8px', marginBottom:'10px', fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>
                    SUBSTACK
                  </Typography>
                </a>
                <div className="fixed-buy-now-button">
                  <a href="https://www.amazon.com/Theft-Fire-Orbital-Space-1/dp/1962514021/?tag=devoneriksen-20" target="_blank" rel="noopener noreferrer"
                    onClick={() => window.sa_event('MenuBuy')}
                    style={{ textDecoration: 'none' }}>
                    <Button sx={{
                      color: "#FFFFFF",
                      fontSize: "18px",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      border: '2px solid purple',
                      borderRadius: '20px',
                      padding: '10px',
                      textTransform: 'upper',
                      ':hover': {
                        bgcolor: 'transparent', // Maintain hollow effect on hover
                        opacity: 0.7, // Optional: slight opacity change on hover
                      }
                    }}>
                      Buy Now  <FaArrowCircleRight style={{ marginLeft: '8px' }} />
                    </Button>
                  </a>
                </div>

              </Stack>
            </Drawer>

            <Grid style={{ marginTop: "35px", marginBottom: "35px" }} container alignItems={"center"} justifyContent={"center"} display={{ xs: "none", md: "flex" }} >
              <Grid item xs={12} style={{ marginBottom: "20px" }}>
                <NavLink to={"/"} className={"hover:text-white"}>
                  <Typography textAlign="center" variant="h4" sx={{ fontFamily: "Megrim" }}><b>Devon Eriksen</b></Typography>
                </NavLink>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' justifyContent="center" alignItems="center" spacing={4}>
                  <NavBarButton menuname="Home" />
                  <NavBarButton menuname="Sale" />
                  <DropdownMenu pathname={pathname} menuName="Novels" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
                  <DropdownMenu pathname={pathname} menuName="Writing"
                    subMenuItems={[{ label: 'Book Updates', link: 'writingupdates' },
                    { label: 'Crafting Stories', link: 'writingcraft' },
                    { label: 'Short Fiction', link: 'writingfiction' }]}
                    openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
                  <NavBarButton menuname="Events" />
                  <DropdownMenu pathname={pathname} menuName="Media"
                    subMenuItems={[{ label: 'Awards', link: 'awards' },
                    { label: 'Reviews', link: 'reviews' },
                    { label: 'Interviews', link: 'interviews' }]}
                    openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
                  <NavBarButton menuname="About" />
                  <NavBarButton menuname="Contact" />
                  <a
                    href="https://devoneriksen.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography className="font-style dropdown" sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>
                      SUBSTACK
                    </Typography>
                  </a>
                  <NavBarButton menuname="Buy Now"
                    link="https://www.amazon.com/Theft-Fire-Orbital-Space-1/dp/1962514021/?tag=devoneriksen-20" />
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

      </Box>

    </>
  )
}
export default Navbar