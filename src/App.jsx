import './App.css';
import React from 'react'
import { Route, Routes, useRoutes, useLocation, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Novels from './pages/Novels';
import Sale from './pages/Sale';
import Purchase from './pages/Purchase';
import Audiobooks from './pages/Audiobooks';
import Pirate from './pages/Pirate';
import BookDetail from './pages/BookDetail';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Media from './pages/media';
import WritingAll from './pages/WritingAll';


import { TheftofFire } from './components/Books/Orbital-ToF';
import { BoxofTrouble } from './components/Books/Orbital-BoT';

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
        { path: "sale", element: <Sale /> },
        { path: "audiobooks", element: <Audiobooks /> },
        { path: "pirate", element: <Pirate/> },
        { path: TheftofFire.Page, element: <BookDetail {...TheftofFire}/> },
        { path: BoxofTrouble.Page, element: <BookDetail {...BoxofTrouble}/> },
        {
          path: "purchase", 
          element: <Purchase />,
          children: [
            { path: TheftofFire.Page, element: <BookDetail {...TheftofFire}/> }
          ]
        },
        { path: "contact", element: <Contact /> },
        { path: "events", element: <Events /> },
        { path: "media", element: <Media /> },
          { path: "awards", element: <Media /> },
          { path: "reviews", element: <Media /> },
          { path: "interviews", element: <Media /> },
        { path: "writing", element: <WritingAll /> },
          { path: "writingcraft", element: <WritingAll /> },
          { path: "writingfiction", element: <WritingAll /> },
          { path: "writingupdates", element: <WritingAll /> },

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
