import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../button/Button.jsx";
import "./PropertyCard.css";
import property1 from "../../assets/img/property_1.jpg";
import axios from "axios";

function PropertyCard({ label, image, title, price, description }) {
    const [error, toggleError] = useState(false);
    const [property, setProperty] = useState();
    const navigate = useNavigate();
    const {propertyId} = useParams();

    async function deleteProperty() {
        console.log(setProperty)
        try {
            const response = await axios.delete(`http://localhost:8080/properties/${propertyId}`);
            console.log(response)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
        return(
            <article className="property-card">
                <span>{label}</span>
                <img src={property1} alt={title}/>
                <h2 className="property-card-name">{title}</h2>
                <h4 className="property-card-price">€ {price},-</h4>
                <p className="property-card-description">{description}</p>
                <Button type="button" variant="primary" onClick={() => navigate('/properties/${propertyId}')}>more info</Button>
                {/*{isAuthenticated ? (*/}
                <Button type="button" onClick={deleteProperty}>Delete property</Button>
                {/*) :*/}
                {/*TODO: WAT VUL IK HIER IN?*/}
                {/*}*/}
            </article>
        );
    }


export default PropertyCard;