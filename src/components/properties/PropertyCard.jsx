import React from 'react';
import {Link} from 'react-router-dom';
import Button from "../button/Button.jsx";

function PropertyCard({ label, image, title, price, description }) {

        // path, label, image, imageAlt, address, housenumber, price

        return(
            <article className="property">
                <span>{label}</span>
                <img src={image} alt={title}/>
                <h2 className="property-name">{title}</h2>
                <h4>€{price},-</h4>
                <p className="property-description">{description}</p>
                {/*<Link to=""*/}
                <Button type="button" variant="primary">more info</Button>
            </article>
        );
    }


export default PropertyCard;