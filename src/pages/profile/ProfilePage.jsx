import React, {useEffect, useState} from 'react';
import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {Link} from "react-router-dom";
import AddingOfProperty from "../../components/addingOfProperty/AddingOfProperty.jsx";
import DeletingOfProperty from "../../components/deletingOfProperty/DeletingOfProperty.jsx";

function ProfilePage() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [account, setAccount] = useState([]);
    const [formState, setFormState] = useState('');

    useEffect(() => {
        void fetchAccounts();
    }, []);


    async function fetchAccounts() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/accounts');
            setAccount(response.data);
            console.log(response.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false)
    }

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
            <div></div>
            <div>
                {account.map((account) => (
                    <>
                        <section>
                            <h1 key={account.id}>Hello, {account.firstname}, here are your details:</h1>
                            <p key={account.id}>First name: {account.firstname}</p>
                            <p>Last name: {account.lastname}</p>
                            <p>Email: {account.email}</p>
                        </section>
                        <section>
                            <h2>Content visible after login</h2>
                            <Button type="button" onClick={deleteAccount} variant="primary">Delete account</Button>
                            <AddingOfProperty/>
                            <DeletingOfProperty/>
                        </section>
                        <p>Back to <Link to="/">home</Link></p>
                    </>
                ))}
            </div>

        </>
    );
}

export default ProfilePage;