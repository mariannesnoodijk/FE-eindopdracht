import React from 'react';
import './Homepage.css';
import {Link} from "react-router-dom";
import HeroSection from "../../components/herosection/HeroSection.jsx";
import Properties from "../properties/Properties.jsx";
import AddingOfFile from "../../components/addingOfFile/AddingOfFile.jsx";


function Homepage() {
    return (
        <>
            <HeroSection/>
            <Properties/>
            <AddingOfFile/>
        </>
    );
}

export default Homepage;