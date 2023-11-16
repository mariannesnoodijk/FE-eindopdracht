import React, {useEffect, useState} from "react";
import axios from "axios";
import PropertyCard from "../../components/propertycard/PropertyCard.jsx";
import Button from "../../components/button/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";

function PropertyInfoPage() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [propertyInfo, setPropertyInfo] = useState([]);
    const navigate = useNavigate();
    const {propertyId} = useParams(); // pakt wat achter de / wordt gezet in de url


    useEffect(() => {
        void fetchPropertyInfo();
    }, []);

    async function fetchPropertyInfo() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/properties/${propertyId}`);
            console.log(response.data);
            setPropertyInfo(response.data);
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
                    <div className="general-form">
                    {Object.keys(propertyInfo).length > 0 && (
                        // <div className="container-propertyinfo">
                    // {propertyPage.map((property) => {
                            <PropertyCard
                                key={propertyInfo.propertyInfoId}
                                // image={cardImage1}
                                label="New"
                                title={`${propertyInfo.address}`}
                                price={propertyInfo.price}
                                description={propertyInfo.description}
                            />
                        // </div>
                    )}
                    <Button type="submit" variant="primary" onClick={() => navigate('/viewingsPage')} >Afspraak maken</Button>
                    <Button type="submit" variant="primary" onClick={() => navigate('/propertyPage')}>Terug naar overzicht</Button>
                    {error && <p>Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw.</p>}
                </div>
                </div>
            </section>
        </>
    );
}

export default PropertyInfoPage;