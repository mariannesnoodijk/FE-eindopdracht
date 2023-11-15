import React, {useContext, useState} from 'react';

import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './dropdown/Dropdown.jsx';
import logo from "../../assets/favicon/PREMIUM CASAS.png";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);


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
                <Link to='/' onClick={closeMobileMenu}>
                    <img className='navbar-logo' src={logo} alt="Company logo"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <CloseIcon/> : <MenuIcon/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'} onClick={closeMobileMenu}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/properties" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'} onClick={closeMobileMenu}>Properties</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to="/about" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'} onClick={closeMobileMenu}>About Us</NavLink>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <NavLink to="/login" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'} onClick={closeMobileMenu}><AccountCircleOutlinedIcon/></NavLink>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/favorites" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'} onClick={closeMobileMenu}><FavoriteBorderOutlinedIcon/></NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;