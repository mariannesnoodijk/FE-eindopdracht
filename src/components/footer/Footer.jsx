import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="sb__footer section__padding">
                    <div className="sb__footer-links">
                            <p>Visit me on:</p>
                            <div className="socialmedia">
                                <p><NavLink to="https://www.linkedin.com/in/mariannesnoodijk/"><LinkedInIcon/></NavLink></p>
                                <p><NavLink to="https://github.com/mariannesnoodijk"><GitHubIcon/></NavLink></p>
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