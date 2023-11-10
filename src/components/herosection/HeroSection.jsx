import React from "react";
import {Link, useNavigate} from "react-router-dom";
import './HeroSection.css';
import Button from "../button/Button.jsx";



function HeroSection() {

const navigate = useNavigate()

function handleClick() {
    console.log('Link clicked!');
    navigate('/propertyMatching')
}

    return (
        <>
            <div className="hero-container">
                <h1> FIND YOUR DREAM HOME </h1>
                <p> What are you waiting for? </p>
                <div>
                        <Button type="submit" variant="primary" onClick={handleClick}>match me</Button>
                </div>
            </div>
        </>
    );
}

export default HeroSection;