import React from 'react';
import {Link} from 'react-router-dom';
import Button from "../button/Button.jsx";
import './PropertyCard.css'

function PropertyCard({ label, image, title, price, description }) {

        // path, label, image, imageAlt, address, housenumber, price

        return(
            <article className="propertycard">
                <span>{label}</span>
                <img src={image} alt={title}/>
                <h2 className="propertycard-name">{title}</h2>
                <h4>€{price},-</h4>
                <p className="propertycard-description">{description}</p>
                <Button type="button" variant="primary">more info</Button>
            </article>
        );
    }


export default PropertyCard;