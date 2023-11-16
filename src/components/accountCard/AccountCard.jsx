import React from "react";


function AccountCard({id, firstname, lastname, email, username}) {

    return (
        <>
            <li className="account-card">
                <p>Account id: {account.id}</p>
                <p>First name: {account.firstname}</p>
                <p>Last name: {account.lastname}</p>
                <p>Email address: {account.email}</p>
                <p>Username: {account.username}</p>
            </li>
        </>
    );
}

export default AccountCard;