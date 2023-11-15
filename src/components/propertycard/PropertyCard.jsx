import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../button/Button.jsx";
import "./PropertyCard.css";

function PropertyCard({ label, image, title, price, description }) {
    const navigate = useNavigate();

        return(
            <article className="property-card">
                <span>{label}</span>
                {/*<img src={image} alt={title}/>*/}
                <h2 className="property-card-name">{title}</h2>
                <h4>€{price},-</h4>
                <p className="property-card-description">{description}</p>
                <Button type="button" variant="primary" onClick={() => navigate('/properties/{propertyId}')}>more info</Button>
            </article>
        );
    }


export default PropertyCard;