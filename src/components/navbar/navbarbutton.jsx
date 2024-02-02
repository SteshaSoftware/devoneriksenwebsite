import React, { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import "./navbarbutton.css"
import { FaArrowCircleRight } from 'react-icons/fa';


const NavBarButton = ({ menuname, droplist, link }) => {
    let isExternal = false;
    let url = menuname === "Home" ? "/" : `/${menuname.toLowerCase()}`;
    if (menuname === "Buy Now") {
        url = link;
        isExternal = true;
    }

    if (droplist) {
        // Render a dropdown
        return (
            <Link to={url}>
                <span className="navbarbutton rounded inline-flex items-center menuname-text">
                    {menuname} <BsChevronDown />
                </span>

                <span className="droplist-text dropdown">
                    {droplist}
                </span>
            </Link>

        );
    } else {
        // Render a single link
        if (isExternal) {
            return (
                <a href={url} className={"buy-now-button"} target="_blank" rel="noopener noreferrer"
                onClick={() => window.sa_event('MenuBuy')}>
                    {menuname} <FaArrowCircleRight /> 
                </a>
            );
        } else {
            return (
                <Link className="navbarbutton" to={url}>
                    {menuname}
                </Link>
            );

        }
    }
};
export default NavBarButton