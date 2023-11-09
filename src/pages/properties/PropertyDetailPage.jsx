import React, {useEffect, useState} from 'react';
import axios from "axios";
import PropertyCard from "../../components/propertycard/PropertyCard.jsx";

function PropertyDetailPage() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchPropertyDetails();
    }, []); // Fetch properties when the component mounts

    async function fetchPropertyDetails() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('http://localhost:8080/properties/{propertyId}');
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
                        <h1>property detail</h1>
                    </div>
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
                    })};
                </div>
            </section>
        </>
    );
}

export default PropertyDetailPage;