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
            <div className="hero-section__container">
                <h1> find your dream home </h1>
                <p> what are you waiting for? </p>
                <div className="hero-section__button">
                        <Button type="submit" variant="primary" onClick={handleClick}>match me</Button>
                </div>
            </div>
        </>
    );
}

export default HeroSection;