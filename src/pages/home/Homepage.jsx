import React from 'react';
import './Homepage.css';
import {Link} from "react-router-dom";
import HeroSection from "../../components/herosection/HeroSection.jsx";
import Properties from "../../components/properties/Properties.jsx";


function Homepage() {
    return (
        <>
            <HeroSection/>
            <Properties/>

            {/*<main>*/}
            {/*    <section className="homepage-admin-overview">*/}
            {/*        <div className="homepage-admin-top-section">*/}
            {/*            <p>POPULAR PROPERTIES</p>*/}
            {/*            <button className="homepage-admin-btn">*/}
            {/*                VIEW ALL*/}
            {/*            </button>*/}
            {/*        </div>*/}
                    {/*<div className="homepage-property-container">*/}
                    {/*    <div className="homepage-property-box">*/}
                    {/*    {PropertyList.map((propertyDetail) => {*/}
                    {/*        return (*/}
                    {/*            <PropertyDetail*/}
                    {/*                key={propertyDetail.id}*/}
                    {/*                image={propertyDetail.image}*/}
                    {/*                name={propertyDetail.name}*/}
                    {/*                price={propertyDetail.price}*/}
                    {/*            />*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
            {/*    </section>*/}
            {/*</main>*/}
        </>
    );
}

export default Homepage;