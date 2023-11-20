import './App.css';
import React from 'react'
import { Route, Routes, useRoutes, useLocation, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Novels from './pages/Novels';
import OrbitalSpace from './pages/OrbitalSpace';
import TheftofFire from './pages/TheftofFire';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Media from './pages/media';

import WritersThought from './pages/WritersThought';
import WritingAll from './pages/WritingAll';
import Fictionwrting from './pages/Fictionwrting';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');

    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [location, navigate]);

  let routes = [
    {
      path: "/", // The base path
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> }, // Notice that the leading slash is removed
        { path: "novels", element: <Novels /> },
        { path: "theft-of-fire", element: <TheftofFire /> },
        { path: "orbital-space", element: <OrbitalSpace /> },
        { path: "contact", element: <Contact /> },
        { path: "events", element: <Events /> },
        { path: "media", element: <Media /> },
        { path: "writingarticles", element: <WritersThought /> },
        { path: "writing", element: <WritingAll /> },
        {path: "writingfiction",element: <Fictionwrting />},
  
      ]
    }
  ];


  const element = useRoutes(routes)
  return (
    <>
      {element}
    </>
  )

}
export default App






// import './App.css';
// import React from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Navbar from './components/navbar/Navbar';
// import Layout from './pages/Layout';
// import Novels from './pages/Novels';
// import OrbitalSpace from './pages/OrbitalSpace';
// import Footer from './components/Footer/footer';
// import { Box } from '@mui/material';
// import bg from "./images/bg.jpg"
// import TheftofFire from './pages/TheftofFire';
// import Contact from './pages/Contact';
// import NewsEmail from './components/Newsletter/newsEmail';
// import Events from './pages/Events';
// import Media from './pages/media';
// import AdminControl from './pages/Admin';
// import ShowEmails from './components/AdminComp/showEmail';
// import AdminNavbar from './components/AdminComp/adminNavbar';
// import ShowContactinfo from './components/AdminComp/Contactinfo';
// import AddArticles from './components/AdminComp/addArticles';
// import WritersThought from './pages/WritersThought';
// import Login from './pages/Login';

// const App = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin-setup' || '/admin-setup/showemails' || '/admin-setup/showcontacts' || '/admin-setup/addwritingarticles' || '/admin-setup/login');

//   const adminRoutes = (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//       <Route path="/admin-setup" element={<AdminControl />} />
//       <Route path="/admin-setup/showemails" element={<ShowEmails />} />
//       <Route path="/admin-setup/showcontacts" element={<ShowContactinfo />} />
//       <Route path="/admin-setup/addwritingarticles" element={<AddArticles />} />
//       <Route path="/admin-setup/login" element={<Login />} />
//       </Route>
//     </Routes>
//   );

//   const mainRoutes = (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/novels" element={<Novels />} />
//         <Route path="/theft-of-fire" element={<TheftofFire />} />
//         <Route path="/orbital-space" element={<OrbitalSpace />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/media" element={<Media />} />
//         <Route path="/writing" element={<WritersThought />} />
//       </Route>
//     </Routes>
//   );

//   return (
//     <>
//       <Box
//         sx={{
//           backgroundSize: 'contain',
//           position: "relative",
//           backgroundRepeat: 'repeat',
//           backgroundImage: isAdminRoute ? 'none' : `url(${bg})`,
//         }}
//       >
//         {!isAdminRoute && <Navbar />}
//         {isAdminRoute ? adminRoutes : mainRoutes}
//         {!isAdminRoute && <NewsEmail />}
//         {!isAdminRoute && <Footer />}
//       </Box>
//     </>
//   );
// }

// export default App;


