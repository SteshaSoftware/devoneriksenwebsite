import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { BsChevronDown } from "react-icons/bs";
import { useState } from 'react'
import "./navbar.css"

const DropdownMenu = ({ pathname, menuName, subMenuItems }) => { 
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    return (
      <div 
        onMouseOver={() => setDropdownOpen(true)} 
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <Box sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>
          <Link to={`/${menuName.toLowerCase()}`}>
            <div className={`${pathname === `/${menuName.toLowerCase()}` ? "activeClass" : "noActiveClass"} font-style  dropdown rounded inline-flex items-center`}>
              <span className="mr-1">{menuName.toUpperCase()}</span>
              {subMenuItems && <BsChevronDown />}
            </div>
          </Link>

          {subMenuItems && isDropdownOpen && (
            <ul className="absolute z-10 text-gray-700 pt-1">
              {subMenuItems.map((item, index) => (
                <li className="" key={index}>
                  <Link to={`/${item.link.toLowerCase()}`} className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Box>
      </div>
    );
  };

export default DropdownMenu