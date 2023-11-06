import React, {useState} from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/favicon/PREMIUM CASAS.png';
// import {ReactComponent as Logo} from '../../assets/favicon/Logo.svg';
import ReorderIcon from '@mui/icons-material/Reorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Navigation() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (

        <>
        <nav className="navbar">
            {/*<div className="nav-container">*/}
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={logo} alt=""/>
                {/*<Logo className="logo"/> PROBEER LOGO ALS SVG REACT COMPONENT IN TE LADEN */}
                <div className="hiddenLinks">
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink> </li>
                {/*<li><NavLink to="/about" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>About us</NavLink> </li>*/}
                <li><NavLink to="/listings" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Listings</NavLink> </li>
                <li><NavLink to="/contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact us</NavLink> </li>
                <li><NavLink to="/login" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}><AccountCircleOutlinedIcon/></NavLink> </li>
                <li><NavLink to="/favorites" className={({isActive}) => isActive === true ? 'active link' : 'default-link'}><FavoriteBorderOutlinedIcon/></NavLink> </li>
            </ul>
            </div>
            {/*</div>*/}

            </div>
            <div className="rightSide">
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink> </li>
                    {/*<li><NavLink to="/about" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>About us</NavLink> </li>*/}
                    <li><NavLink to="/listings" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Listings</NavLink> </li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Contact us</NavLink> </li>
                    <li><NavLink to="/login" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}><AccountCircleOutlinedIcon/></NavLink> </li>
                    <li><NavLink to="/favorites" className={({isActive}) => isActive === true ? 'active link' : 'default-link'}><FavoriteBorderOutlinedIcon/></NavLink> </li>
                </ul>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
            </div>
        </nav>
        </>
    );
}
export default Navigation;


