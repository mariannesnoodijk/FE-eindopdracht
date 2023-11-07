import React from "react";
import {Link} from "react-router-dom";
import './HeroSection.css';
import Button from "../button/Button.jsx";


function HeroSection() {
    return (
        <>
            <div className="hero-container">
                <h1> FIND YOUR DREAM HOME </h1>
                <p> What are you waiting for? </p>
                <div>
                    <Link to="/matching">
                        <Button type="submit" variant="primary">match me</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeroSection;