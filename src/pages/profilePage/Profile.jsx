import React, {useContext, useEffect, useState} from "react";
import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {Link} from "react-router-dom";
import "./ProfilePage.css";
import PostProperty from "../../components/postProperty/PostProperty.jsx";
import DeleteProperty from "../../components/deleteProperty/DeleteProperty.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import GetViewings from "../../components/getViewings/GetViewings.jsx";

function ProfilePage() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [account, setAccount] = useState([]);
    const [formState, setFormState] = useState('');

    // const {user} = useContext(AuthContext);

    async function deleteAccount() {
        console.log(formState)
        try {
            const response = await axios.delete(`http://localhost:8080/accounts/${formState}`);
            console.log(response)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <section className="overview-section outer-content-container">
                <div className="inner-content-container">
                    <div className="general-form-top">
                        <h1>profile page</h1>
                    </div>
                    return (
                    <>
                        <section className="profilepage__accountinfo">
                            {/*<h1 key={user.id}>Welcome {user.firstname}</h1>*/}
                            {/*<h2>Accountinformation:</h2>*/}
                            {/*<p key={user.id}>First name: {user.firstname}</p>*/}
                            {/*<p>Last name: {user.lastname}</p>*/}
                            {/*<p>Email: {user.email}</p>*/}
                        </section>
                        <section className="profilepage__accountinfo">
                            <h2>Content visible after login</h2>
                            <Button type="button" onClick={deleteAccount} variant="primary">Delete my account</Button>
                            {/*<Button type="button" onClick={} variant="primary">Delete account</Button>*/}
                            <GetViewings/>
                            <PostProperty/>
                            <DeleteProperty/>
                        </section>
                        <p>Back to <Link to="/">home</Link></p>
                    </>
                </div>
            </section>
        </>
    );
}

export default ProfilePage;