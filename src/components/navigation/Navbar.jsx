import React, {useContext, useState} from "react";

import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./dropdown/Dropdown.jsx";
import logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {AuthContext} from "../../context/AuthContext.jsx";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const {isAuthenticated, logout, user} = useContext(AuthContext);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' >
                    <img className='navbar__logo' src={logo} alt="Company logo"/>
                </Link>
                <div className='navbar-menu__icon' onClick={handleClick}>
                    {click ? <CloseIcon/> : <MenuIcon/>}
                </div>
                <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                    <li className='navbar-item'>
                        <NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}
                                 onClick={closeMobileMenu}>Home</NavLink>
                    </li>
                    <li className='navbar-item'>
                        <NavLink to="/properties"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}
                                 onClick={closeMobileMenu}>Properties</NavLink>
                    </li>
                    {isAuthenticated ? (
                            <>
                                <li className='navbar-item'>
                                    <NavLink to="/"
                                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}
                                             onClick={() => {
                                                 closeMobileMenu();
                                                 logout();
                                             }}>Logout</NavLink>
                                </li>
                                <li className='navbar-item'>
                                    <NavLink to="/profile"
                                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}
                                             onClick={() => {
                                                 closeMobileMenu();
                                             }}>My profile</NavLink>
                                </li>
                            <li className='navbar-item'>
                                <NavLink to="/favorites"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}
                                         onClick={closeMobileMenu}><FavoriteBorderOutlinedIcon/></NavLink>
                            </li>
                            </>
                        ) :
                            <li
                                className='navbar-item'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <NavLink to="/login"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}
                                         onClick={closeMobileMenu}><AccountCircleOutlinedIcon/></NavLink>
                                {dropdown && <Dropdown/>}
                            </li>
                        }
                </ul>
            </nav>
        </>
    );
}

export default Navbar;