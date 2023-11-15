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
    }, []); // Fetch properties when the component mounts


    // const handleFavoriteToggle = async (propertyId, isFavorite) => {
    //     try {
    //         const response = await axios.patch(`http://localhost:8080/properties/${propertyId}/favorite`, isFavorite);
    //         console.log(response.data); // Updated property object with favorite status
    //         fetchProperties(); // Fetch updated properties after favorite status change
    //     } catch (pageNotFound) {
    //         console.pageNotFound(pageNotFound);
    //     }
    // };


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
                    <div className="property-container">

                        {properties.map((property) => {
                            return (
                                <PropertyCard
                                    key={property.propertyId}
                                    // image={image1}
                                    label="New in!"
                                    title={`${property.address}`}
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