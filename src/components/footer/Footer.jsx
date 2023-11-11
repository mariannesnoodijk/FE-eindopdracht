import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link, NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="sb__footer section__padding">
                    <div className="sb__footer-links">
                        <div className="sb__footer-links-div">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="sb__footer-links-div">
                            <Link to="/about">Contact Us</Link>
                        </div>
                        <div className="sb__footer-links-div">
                            <Link to="/about">About</Link>
                        </div>
                        <div className="sb__footer-links-div">
                            <Link to="/properties">View all properties</Link>
                        </div>
                        <div className="sb__footer-links-div">
                            <p>Visit me on:</p>
                            <div className="socialmedia">
                                <p><NavLink to="https://www.linkedin.com/in/mariannesnoodijk/"><LinkedInIcon/></NavLink></p>
                                <p><NavLink to="https://github.com/mariannesnoodijk"><GitHubIcon/></NavLink></p>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="sb__footer-below">
                        <div className="sb__footer-copyright">
                            <p>@{new Date().getFullYear()} All rights reserved.</p>
                            <p>This page was built and designed by Marianne Snoodijk</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

// <div className="footer-container">
//     <div className="footer-container section-padding">
//         {/*<div className="footer-top">*/}
//         <div className="footer-links">
//             <div className="footer-links-div">
//                 <Link to="/about">About</Link>
//                 <Link to="/about">Contact Us</Link>
//                 <Link to="/properties">View all properties</Link>
//             </div>
//         </div>
//         <div className="footer-links">
//             <div className="footer-links-div">
//                 <Link to="/about">About</Link>
//                 <Link to="/about">Contact Us</Link>
//                 <Link to="/properties">View all properties</Link>
//             </div>
//         </div>
//     </div>
//     <div className="footer-links">
//         <p>Visit me on:</p>
//         <div className="footer-icons">
//             <NavLink to="https://www.linkedin.com/in/mariannesnoodijk/"><LinkedInIcon/></NavLink>
//             <NavLink to="https://github.com/mariannesnoodijk"><GitHubIcon/></NavLink>
//         </div>
//     </div>
//     <div className="footer-bottom">
//         <div className="footer-copyright">
//             <p>@{new Date().getFullYear()} All rights reserved.</p>
//             <p>This page was built and designed by Marianne Snoodijk</p>
//         </div>
//     </div>
// </div>