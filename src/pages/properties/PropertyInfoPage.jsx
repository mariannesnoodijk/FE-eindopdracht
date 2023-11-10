import React, {useEffect, useState} from 'react';
import axios from "axios";
import PropertyCard from "../../components/propertycard/PropertyCard.jsx";
import {Build} from "@mui/icons-material";
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
    }, []); // Fetch properties when the component mounts

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
                    {Object.keys(propertyInfo).length > 0 && (
                        <div className="container-propertyinfo">
                    {/*{properties.map((property) => {*/}
                            <PropertyCard
                                key={propertyInfo.propertyInfoId}
                                // image={cardImage1}
                                label="New"
                                title={`${propertyInfo.streetname} ${propertyInfo.housenumber}`}
                                price={propertyInfo.price}
                                description={propertyInfo.description}
                            />
                        </div>
                    )}
                    {error && <p>Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw.</p>}
                    <Button type="submit" variant="primary" onClick={() => navigate('/viewings')} >Afspraak maken</Button>
                    <Button type="submit" variant="primary" onClick={() => navigate('/properties')}>Terug naar overzicht</Button>
                </div>
            </section>
        </>
    );
}

export default PropertyInfoPage;