import React, {useContext, useEffect, useState} from "react";
import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./Profile.css";
import {AuthContext} from "../../context/AuthContext.jsx";
import AccountsInfoItem from "../../components/accountsInfoItem/AccountsInfoItem.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";

function Profile() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [formState, setFormState] = useState('');
    const [profileData, setProfileData] = useState({});
    const [deleteData, setDeleteData] = useState('');
    const [showConfirmation, toggleShowConfirmation] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const {user, role} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showAccounts, toggleShowAccounts] = useState(false);

    const toggleAccountsVisibility = () => {
        toggleShowAccounts(!showAccounts);
    };

    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem("token");
            try {
                const result = await axios.get(`http://localhost:8080/accounts/${user.id}`, {
                    headers: {
                        "Content-Type": 'application/json',
                        Authorization: `${token}`,
                    }
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
        const token = localStorage.getItem("token")
        try {
            const response = await axios.delete(`http://localhost:8080/accounts/${user.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
            setDeleteData(response.data);
            toggleShowConfirmation(true);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


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
            setAccounts(response.data);
            toggleShowAccounts(true);
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
                    <section className="profilepage__accountinfo">
                        <h1 className="profilepage__welcome-message">Welcome {profileData.firstname}</h1>
                        <h2>Account information:</h2>
                        <p key={profileData.id}>First name: {profileData.firstname}</p>
                        <p>Last name: {profileData.lastname}</p>
                        <p>Email: {profileData.email}</p>
                        <p>Username: {profileData.username}</p>
                        <p>Rolename: {profileData.role}</p>
                    </section>
                    <section className="profilepage__accountinfo">
                        <div className="profilepage__buttons">
                            <Button type="button" variant="primary" onClick={() => navigate('/viewingsoverview')}>See
                                my scheduled viewings</Button>
                            {role === 'ADMIN' && (
                                <>
                                    <Button type="button"
                                            variant="primary"
                                            onClick={() => navigate('/addingAProperty')}
                                    >Add a property</Button>
                                    <Button
                                        type="button"
                                        onClick={showAccounts ? toggleAccountsVisibility : fetchAllAccounts}
                                        variant="primary"
                                    >{showAccounts ? 'Hide all accounts' : 'View all accounts'}</Button>
                                </>
                            )}
                            {showAccounts && accounts.length > 0 && (
                                <>
                                    <h2>All accounts:</h2>
                                    {accounts.map((account) => {
                                        return (<AccountsInfoItem key={account.accountId} account={account}/>)
                                    })}
                                </>
                            )}
                            {!showConfirmation ?
                                <Button
                                    type="button"
                                    onClick={deleteAccount}
                                    variant="primary"
                                > Delete my account </Button>
                                :
                                <ErrorMessage message="Your account has been deleted."/>
                            }
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Profile;