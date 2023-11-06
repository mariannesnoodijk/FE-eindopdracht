import React from "react";
import {Link} from "react-router-dom";
import './HeroSection.css';


function HeroSection() {
    return (
        <>
            <div className="hero-container">
                <h1> FIND YOUR DREAM HOME </h1>
                <p> What are you waiting for? </p>
                <div className="hero-btns">
                    <Link to="/matching">
                        <button className='hero-btn'
                        >
                            MATCH ME
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeroSection;