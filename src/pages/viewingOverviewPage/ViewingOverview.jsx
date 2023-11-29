import Button from "../../components/button/Button.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";
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

    const {viewingId} = useParams(); // pakt wat achter de / wordt gezet in de url

    async function fetchViewings() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('http://localhost:8080/viewings');
            console.log(response.data);
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
        } catch (error) {
            console.log(error);
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
                      {/*{Object.keys(property).length > 0 && (*/}
                      {/*    <>*/}
                      {/*        <h1>{property.address}</h1>*/}
                      {/*        <h2>{property.price}</h2>*/}
                      {/*        <p>{property.description}</p>*/}
                      {/*    </>*/}
                      {/*)}*/}
                      {/*<Button type="submit" variant="primary" onClick={() => navigate('/viewings')}>Plan your viewing</Button>*/}
                      {/*<Button type="submit" variant="primary" onClick={() => navigate('/properties')}>Back to properties</Button>*/}
                      {/*{error && <ErrorMessage message="Something went wrong fetching your data. Please try again."/>}*/}

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