import React from 'react';
import './Homepage.css';
import {Link} from "react-router-dom";
import {ListOfProperties} from "../../helpers/ListOfProperties.jsx";
import PropertyDetail from "../../components/propertyDetail/PropertyDetail.jsx";
import HeroSection from "../../components/herosection/HeroSection.jsx";
import Properties from "../../components/properties/Properties.jsx";
import Cards from "../../components/fake/Cards.jsx";


function Homepage() {
    return (
        <>
            <HeroSection/>
            <h1>TEST</h1>
            {/*<Cards/>*/}
            <Properties/>
            <h1>TEST</h1>

            {/*<main>*/}
            {/*    <section className="homepage-properties-overview">*/}
            {/*        <div className="homepage-properties-top-section">*/}
            {/*            <p>POPULAR PROPERTIES</p>*/}
            {/*            <button className="homepage-properties-btn">*/}
            {/*                VIEW ALL*/}
            {/*            </button>*/}
            {/*        </div>*/}
                    {/*<div className="homepage-property-container">*/}
                    {/*    <div className="homepage-property-box">*/}
                    {/*    {ListOfProperties.map((propertyDetail) => {*/}
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