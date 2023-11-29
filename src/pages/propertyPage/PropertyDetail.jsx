import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import PropertyCard from "../../components/propertycard/PropertyCard.jsx";
import Button from "../../components/button/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";
import property1 from "../../assets/img/property_1.jpg";
import {AuthContext} from "../../context/AuthContext.jsx";

function PropertyDetail() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [property, setProperty] = useState([]);
    const [deleteThisProperty, setDeleteThisProperty] = useState('');
    const {role} = useContext(AuthContext);

    const navigate = useNavigate();

    const {propertyId} = useParams(); // pakt wat achter de / wordt gezet in de url


    useEffect(() => {
        void fetchPropertyInfo();
    }, []);

    async function fetchPropertyInfo() {
        toggleError(false);
        // toggleLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/properties/${propertyId}`);
            console.log(response.data);
            setProperty(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    async function deleteProperty() {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.delete(`http://localhost:8080/properties/${propertyId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
            setDeleteThisProperty(response.data);
            console.log('This property is now deleted')
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <section className="property-detail-section outer-content__container">
                <div className="inner-content-container">
                    <div className="general-form__top-section">
                        <h1>property detail</h1>
                    </div>
                    <div className="general-form">
                        {Object.keys(property).length > 0 && (
                            <>
                                <img className="general-form__image" src={property1} alt={property.address}/>
                        <div className="general-form__left-side">
                                <h1>{property.address}</h1>
                                <h2>€ {property.price},-</h2>
                                <p>{property.description}</p>
                            {role === 'ADMIN' ?
                                <Button type="button" onClick={deleteProperty} variant="primary">Delete my
                                    account</Button>
                                :
                            <Button type="button" variant="primary" onClick={() => navigate('/viewings')}>Plan your viewing</Button>
                            }
                        <Button type="button" variant="primary" onClick={() => navigate('/properties')}>Back to properties</Button>
                        {error && <ErrorMessage message="Something went wrong fetching your data. Please try again."/>}
                        </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PropertyDetail;