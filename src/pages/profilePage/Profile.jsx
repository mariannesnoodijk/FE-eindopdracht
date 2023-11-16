import React, {useContext, useEffect, useState} from "react";
import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./Profile.css";
// import PostProperty from "../../components/postProperty/PostProperty.jsx";
import DeleteProperty from "../../components/deleteProperty/DeleteProperty.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";

function Profile() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [account, setAccount] = useState([]);
    const [formState, setFormState] = useState('');
    const [profileData, setProfileData] = useState({})
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const {accountId} = useParams();

useEffect(() => {
    async function fetchProfileData() {
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://localhost:8080/accounts/${accountId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfileData(result.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
    fetchProfileData();
}, [])

    async function deleteAccount() {
        console.log(formState)
        try {
            const response = await axios.delete(`http://localhost:8080/accounts/${accountId}`);
            console.log(response)
        } catch (e) {
            console.error(e);
            toggleError(true);
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
                        {/*<section className="profilepage__accountinfo">*/}
                        {/*    <h1 key={user.id}>Welcome {user.firstname}</h1>*/}
                        {/*    <h2>Accountinformation:</h2>*/}
                        {/*    <p key={user.id}>First name: {user.firstname}</p>*/}
                        {/*    <p>Last name: {user.lastname}</p>*/}
                        {/*    <p>Email: {user.email}</p>*/}
                        {/*</section>*/}
                        <section className="profilepage__accountinfo">
                            <Button type="button" onClick={deleteAccount} variant="primary">Delete my account</Button>
                            <Button type="button" variant="primary" onClick={() => navigate('/viewingsoverview')}>See all my viewings</Button>
                            <Button type="button" variant="primary" onClick={() => navigate('/addingAProperty')}>Add a property</Button>
                            {/*<PostProperty/>*/}
                            <DeleteProperty/>
                        </section>
                        <p>Back to <Link to="/">home</Link></p>
                    </>
                </div>
            </section>
        </>
    );
}

export default Profile;