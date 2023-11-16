import React from "react";
import "./Homepage.css";
import HeroSection from "../../components/herosection/HeroSection.jsx";
import Properties from "../propertyPage/Properties.jsx";
import PostImage from "../../components/postImage/PostImage.jsx";


function Homepage() {
    return (
        <>
            <HeroSection/>
            <Properties/>
            <PostImage/>
        </>
    );
}

export default Homepage;