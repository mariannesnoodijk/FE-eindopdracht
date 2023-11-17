import React, {useContext, useEffect, useState} from "react";
import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./Profile.css";
import DeleteProperty from "../../components/deleteProperty/DeleteProperty.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import AccountCard from "../../components/accountCard/AccountCard.jsx";

function Profile() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [formState, setFormState] = useState('');
    const [profileData, setProfileData] = useState({})
    const [accounts, setAccounts] = useState([]);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProfileData() {
            // const token = localStorage.getItem('token');
            const accountId = localStorage.getItem('id')
            try {
                const result = await axios.get(`http://localhost:8080/accounts/${accountId}`);
                console.log('user', result)
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

    useEffect(() => {
        void fetchAllAccounts();
    }, []);

    async function fetchAllAccounts() {
        toggleError(false);
        const token = localStorage.getItem("token")

        try {
            const response = await axios.get('http://localhost:8080/accounts', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
            console.log(response.data);
            setAccounts(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <section className="profile__section outer-content__container">
                <div className="inner-content-container">
                    <div className="general-form__top-section">
                        <h1>profile page</h1>
                    </div>
                    return (
                    <>
                        <section className="profilepage__accountinfo">
                            <h1>Welcome {profileData.firstname}</h1>
                            <h2>Accountinformation:</h2>
                            <p key={profileData.id}>First name: {profileData.firstname}</p>
                            <p>Last name: {profileData.lastname}</p>
                            <p>Email: {profileData.email}</p>
                            <p>Username: {profileData.username}</p>
                        </section>
                        <section className="profilepage__accountinfo">
                            <div className="profilepage__buttons">
                            <Button type="button" onClick={deleteAccount} variant="primary">Delete my account</Button>
                            <Button type="button" variant="primary" onClick={() => navigate('/viewingsoverview')}>See
                                all my viewings</Button>
                            <Button type="button" variant="primary" onClick={() => navigate('/addingAProperty')}>Add a
                                property</Button>
                            <DeleteProperty/>
                            <Button type="button" onClick={fetchAllAccounts} variant="primary">Get all accounts</Button>
                            {accounts.length > 0 && (
                                <>
                                <p>All accounts:</p>
                                    {accounts.map((account) => {
                                        return (<AccountCard key={account.accountId} account={account}/>)
                                        ;
                                    })};
                                </>
                                )};
                            </div>
                        </section>
                        <p>Back to <Link to="/">home</Link></p>
                    </>
                </div>
            </section>
        </>
    );
}

export default Profile;