import React from 'react';


const NavItems = [
    {
      label: 'Home',
      path: '/',
      subItems: null,
    },
    {
        label: 'Novels',
        path: '/novels',
        subItems: null,
      },
    {
      label: 'Writing',
      path: '/writing',
      subItems: [
        {
          label: 'Fiction',
          path: '/writingfiction',
          subItems: null
        },
        {
            label: 'Events',
            path: '/events',
            subItems: null,
        },
        {
            label: 'Media',
            path: '/media',
            subItems: null,
          },
          {
            label: 'About',
            path: '/about',
            subItems: null,
          },
          {
            label: 'Contact',
            path: '/contact',
            subItems: null,
          },
      ]
    }
  ];

  export default NavItems