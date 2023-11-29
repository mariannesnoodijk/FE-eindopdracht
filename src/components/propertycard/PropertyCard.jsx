import React, {useContext, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../button/Button.jsx";
import "./PropertyCard.css";
import property1 from "../../assets/img/property_1.jpg";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";
import ErrorMessage from "../errorMessage/ErrorMessage.jsx";

function PropertyCard({ image, title, price, description, propertyId }) {
    const [error, toggleError] = useState(false);
    const [property, setProperty] = useState();
    const [showConfirmation, toggleShowConfirmation] = useState(false);
    const navigate = useNavigate();
    const {role} = useContext(AuthContext);

    async function deleteProperty() {
        const token = localStorage.getItem("token")

        try {
            const response = await axios.delete(`http://localhost:8080/properties/${propertyId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
            toggleShowConfirmation(true)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
        return(
            <article className="property-card">
                <img src={property1} alt={title}/>
                <h2 className="property-card__name">{title}</h2>
                <h4 className="property-card__price">€ {price},-</h4>
                <p className="property-card__description">{description}</p>
                <Button type="button" variant="primary" onClick={() => navigate(`/properties/${propertyId}`)}>more info</Button>
                {role === 'ADMIN' && (
                    <>
                {!showConfirmation ?
                <Button type="button" onClick={deleteProperty}>Delete property</Button>
                    :
                    <ErrorMessage message="This property has been deleted."/>
                    }
                    </>
                    )}
            </article>
        );
    }


export default PropertyCard;