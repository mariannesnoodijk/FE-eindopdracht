import Button from "../../components/button/Button.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


function ViewingOverview() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [viewing, setViewing] = useState([]);

    useEffect(() => {
        fetchViewings()
    }, []);

    const {viewingId} = useParams();

    async function fetchViewings() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('http://localhost:8080/viewings');
            setViewing(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    async function deleteViewing() {

        try {
            toggleLoading(true);
            const response = await axios.delete(`http://localhost:8080/viewings/${viewingId}`);
            setViewing(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
      <>
          <section className="viewing-detail-section outer-content__container">
              <div className="inner-content-container">
                  <div className="general-form__top-section">
                      <h1>my scheduled viewings</h1>
                  </div>
                  <div className="general-form">
                      <Button type="button" onClick={deleteViewing}>Delete viewing</Button>
                      <div className="sub-message">
                          <p><Link className="sub-message__links" to='/profile'>Take me to the previous page</Link></p>
                      </div>
                  </div>
              </div>
          </section>
      </>
    );
}

export default ViewingOverview;