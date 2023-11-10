import React, {useState} from 'react';

import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
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
                        <Link to='/'
                              className='nav-links'
                              onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/properties'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Properties
                        </Link>
                        {/*    <NavLink to='/'*/}
                        {/*             className={({isActive}) => isActive ? 'nav-links' : 'default'}*/}
                        {/*             onClick={closeMobileMenu}*/}
                        {/*    >*/}
                        {/*        Home*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        {/*<li className='nav-item'>*/}
                        {/*    <NavLink*/}
                        {/*        to='/admin'*/}
                        {/*        className={({isActive}) => isActive ? 'nav-links' : 'default'}*/}
                        {/*        onClick={closeMobileMenu}*/}
                        {/*    >*/}
                        {/*        Listings*/}
                        {/*    </NavLink>*/}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/about'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/login'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <AccountCircleOutlinedIcon/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/favorites'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <FavoriteBorderOutlinedIcon/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;

// import React, {useState} from 'react';
//
// import {Link, NavLink} from 'react-router-dom';
// import './Navbar.css';
// import Dropdown from './Dropdown';
// import logo from "../../assets/favicon/PREMIUM CASAS.png";
// import CloseIcon from '@mui/icons-material/Close';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
//
// function Navbar() {
//
//     const [click, setClick] = useState(false);
//     const [dropdown, setDropdown] = useState(false);
//
//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);
//
//     const onMouseEnter = () => {
//         if (window.innerWidth < 960) {
//             setDropdown(false);
//         } else {
//             setDropdown(true);
//         }
//     };
//
//     const onMouseLeave = () => {
//         if (window.innerWidth < 960) {
//             setDropdown(false);
//         } else {
//             setDropdown(false);
//         }
//     };
//
//     return (
//         <>
//             <nav className='navbar'>
//                 <Link to='/' onClick={closeMobileMenu}>
//                     <img className='navbar-logo' src={logo} alt="Company logo"/>
//                 </Link>
//                 <div className='menu-icon' onClick={handleClick}>
//                     {click ? <CloseIcon/> : <MenuIcon/>}
//                 </div>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <li className='nav-item'>
//                         <Link to='/'
//                               className='nav-links'
//                               onClick={closeMobileMenu}
//                         >
//                             Home
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link
//                             to='/properties'
//                             className='nav-links'
//                             onClick={closeMobileMenu}
//                         >
//                             Properties
//                         </Link>
//                     {/*    <NavLink to='/'*/}
//                     {/*             className={({isActive}) => isActive ? 'nav-links' : 'default'}*/}
//                     {/*             onClick={closeMobileMenu}*/}
//                     {/*    >*/}
//                     {/*        Home*/}
//                     {/*    </NavLink>*/}
//                     {/*</li>*/}
//                     {/*<li className='nav-item'>*/}
//                     {/*    <NavLink*/}
//                     {/*        to='/admin'*/}
//                     {/*        className={({isActive}) => isActive ? 'nav-links' : 'default'}*/}
//                     {/*        onClick={closeMobileMenu}*/}
//                     {/*    >*/}
//                     {/*        Listings*/}
//                     {/*    </NavLink>*/}
//                     </li>
//                     <li className='nav-item'>
//                         <Link
//                             to='/contact'
//                             className='nav-links'
//                             onClick={closeMobileMenu}
//                         >
//                             Contact
//                         </Link>
//                     </li>
//                     <li
//                         className='nav-item'
//                         onMouseEnter={onMouseEnter}
//                         onMouseLeave={onMouseLeave}
//                     >
//                         <Link
//                             to='/login'
//                             className='nav-links'
//                             onClick={closeMobileMenu}
//                         >
//                             <AccountCircleOutlinedIcon/>
//                         </Link>
//                         {dropdown && <Dropdown/>}
//                     </li>
//                     <li className='nav-item'>
//                         <Link
//                             to='/favorites'
//                             className='nav-links'
//                             onClick={closeMobileMenu}
//                         >
//                             <FavoriteBorderOutlinedIcon/>
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </>
//     );
// }
//
// export default Navbar;