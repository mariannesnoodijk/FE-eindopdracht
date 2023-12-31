import React from "react";
import "./AccountsInfoItem.css";

function AccountsInfoItem({account}) {

    return (
        <>
                <li className="account-card">
                    <p>Account id: {account.accountId}</p>
                    <p>First name: {account.firstname}</p>
                    <p>Last name: {account.lastname}</p>
                    <p>Email address: {account.email}</p>
                    <p>Username: {account.username}</p>
                    <p>Rolename: {account.role}</p>
                </li>
        </>
    );
}

export default AccountsInfoItem;