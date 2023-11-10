import './Properties.css';

import cardImage1 from '../../assets/amsterdamHouse2.jpg';
import cardImage2 from '../../assets/amsterdamHouse2.jpg';
import cardImage3 from '../../assets/amsterdamHouse2.jpg';
import cardImage4 from '../../assets/amsterdamHouse2.jpg';
import cardImage5 from '../../assets/amsterdamHouse2.jpg';
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "../../components/button/Button.jsx";
import axios from "axios";
import PropertyCard from "../../components/propertycard/PropertyCard.jsx";


function Properties() {
    const [properties, setProperties] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate()


    function handleClick() {
        console.log('Link clicked!');
        navigate('/properties')
    }

    // const handleFavoriteToggle = async (propertyId, isFavorite) => {
    //     try {
    //         const response = await axios.patch(`http://localhost:8080/properties/${propertyId}/favorite`, isFavorite);
    //         console.log(response.data); // Updated property object with favorite status
    //         fetchProperties(); // Fetch updated properties after favorite status change
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    useEffect(() => {
        fetchProperties()
    }, []); // Fetch properties when the component mounts

    async function fetchProperties() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('http://localhost:8080/properties');
            console.log(response.data);
            setProperties(response.data);
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);

            toggleError(true);
        }
        toggleLoading(false);
    }


    return (
        <>
            <section className="overview-section outer-content-container">
                <div className="inner-content-container">
                    <div className="general-form-top">
                        <h1>property overview</h1>
                    </div>
                    <main>
                        {properties.map((property) => {
                            return (
                                <PropertyCard
                                    key={property.propertyId}
                                    // image={cardImage1}
                                    label="New"
                                    title={`${property.streetname} ${property.housenumber}`}
                                    price={property.price}
                                    description={property.description}
                                />
                            )
                        })}
                    </main>
                    <Button type="button" onClick={handleClick} variant="primary">view all properties</Button>
                </div>
                {loading && <p>Loading...</p>}
            </section>
        </>
    );
}

export default Properties;