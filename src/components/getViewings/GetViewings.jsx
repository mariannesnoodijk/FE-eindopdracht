import axios from "axios";
import React, {useEffect, useState} from "react";


function GetViewings() {
const [error, toggleError] = useState(false);
const [loading, toggleLoading] = useState(false);
const [viewings, setViewings] = useState([]);

    useEffect(() => {
        fetchViewings()
    }, []); // Fetch viewings when the component mounts

    async function fetchViewings() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('http://localhost:8080/viewings');
            console.log(response.data);
            setViewings(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <section className="overview-section outer-content-container">
                <div className="inner-content-container">
                    <div className="general-form-top">
                        <h1>viewing overview</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GetViewings;