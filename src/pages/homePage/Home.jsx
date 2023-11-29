import React from "react";
// import "./Home.css";
import HeroSection from "../../components/herosection/HeroSection.jsx";
import Properties from "../propertiesPage/Properties.jsx";
import PostImage from "../../components/postImage/PostImage.jsx";


function Home() {
    return (
        <>
            <HeroSection/>
            <Properties/>
            <PostImage/>
        </>
    );
}

export default Home;