import {Link} from "react-router-dom";
import React from "react";


export default function Contact() {
    return (
        <div>
            <h1>Contact pagina</h1>
            <Link to="/about">Naar de "over ons" pagina</Link>
            <div className="about-wrapper">
                <section>
                    <div className="about">
                        <h1>About us</h1>
                    </div>
                    <div className="contact">
                        <div className="contact-left-side">
                            <h3>get in touch with us</h3>
                            <h1>WE'D LOVE TO HEAR FROM YOU</h1>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="contact-right-side">
                        <h1>PHONE</h1>
                        <p>+31 20 121 00 80</p>
                        <h1>EMAIL</h1>
                        <p>primera_opcion@realestate.com</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

