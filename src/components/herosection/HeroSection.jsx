import React from "react";
import {useNavigate} from "react-router-dom";
import "./HeroSection.css";
import Button from "../button/Button.jsx";



function HeroSection() {

const navigate = useNavigate()

    function handleClick() {
        navigate('/matching')
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