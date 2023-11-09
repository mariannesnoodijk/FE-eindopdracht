import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <span>
            <NavLink className="footer-icons" to="https://www.linkedin.com/in/mariannesnoodijk/"><LinkedInIcon/></NavLink>
    <NavLink className="footer-icons" to="https://github.com/mariannesnoodijk"><GitHubIcon/></NavLink>
            </span>
            <p>This page was built and designed by Marianne Snoodijk</p>
        </div>
    );
}

export default Footer;