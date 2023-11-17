import Button from "../button/Button.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function DeleteProperty() {
    const [property, setProperty] = useState([]);
    const [formState, setFormState] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const {propertyId} = useParams();

    useEffect(() => {
        void fetchProperties();
    }, []);

    async function fetchProperties() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/properties');
            setProperty(response.data);
            console.log(response.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false)
    }

    async function handleSubmit(e) {
        console.log(formState)
        e.preventDefault()
        try {
            const response = await axios.delete(`http://localhost:8080/properties/${propertyId}`);
            console.log(response)

            await fetchProperties()
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
        }
    }

    const handleInputChange = (e) => {
        setFormState(e.target.value)
    }

    return (
        <>
            <section className="new-general-form-section outer-content__container">
                <div className="inner-content-container__text-restriction">
            <form onSubmit={handleSubmit}>
                <select
                    name="propertyId"
                    onChange={handleInputChange}>
                    <option value="">Select a property</option>
                    {property &&
                        property.map((property) => { return (
                            <option
                                key={property.id}
                                value={property.id}>{property.name}</option>)})}
                </select>
                <Button type="submit" variant="primary">Delete property</Button>

            </form>
                </div>
            </section>
        </>
    );
}

export default DeleteProperty;