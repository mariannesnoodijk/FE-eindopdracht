import "./Properties.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PropertyCard from "../../components/propertycard/PropertyCard.jsx";


function Properties() {
    const [properties, setProperties] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        fetchProperties()
    }, []); // Fetch propertiesPage when the component mounts


    async function fetchProperties() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('http://localhost:8080/properties');
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
            <section className="property-overview__section outer-content__container">
                <div className="inner-content-container">
                    <div className="general-form__top-section">
                        <h1>property overview</h1>
                    </div>
                    <div className="property__container">

                        {properties.map((property) => {
                            return (
                                <PropertyCard
                                    key={property.propertyId}
                                    propertyId={property.propertyId}
                                    label="New in!"
                                    title={property.address}
                                    price={property.price}
                                    description={property.description}
                                />
                            )
                        })}
                    </div>
                </div>
                {loading && <p>Loading...</p>}
            </section>
        </>
    );
}

export default Properties;