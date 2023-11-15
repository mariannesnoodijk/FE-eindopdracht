import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            void login(token);
        } else {
toggleIsAuth({
    ...isAuth,
    status: 'done',
});
        }
    }, []);

    const navigate = useNavigate();

    async function login(token) {
        localStorage.setItem('token', token);
        console.log(token)
        const userInfo = jwtDecode(token);
        const userId = userInfo.sub;

        try {
            const response = await axios.get(`http://localhost:8080/accounts/${userId}`, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response);

            toggleIsAuth({
                isAuthenticated: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: 'done',
            });
            navigate('/profile');
        } catch (e) {
            console.error(e);
            toggleIsAuth({
                ...isAuth,
                status: 'done',
            })
        }
        console.log('User is logged in!');

    }

    function logout() {
        console.log('User is logged out!');
        toggleIsAuth({
            isAuthenticated: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    const contextData = {
        ...isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;