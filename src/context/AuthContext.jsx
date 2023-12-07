import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
        role: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchData = async () => {
            if (token) {
                await login(token);
            } else {
                toggleIsAuth({
                    isAuthenticated: false,
                    user: null,
                    role: null,
                    status: 'done',
                });
            }
        };
        void fetchData();
    }, []);

    const navigate = useNavigate();

    async function login(token) {
        localStorage.setItem('token', token);
        const userInfo = jwtDecode(token);
        const accountId = userInfo.accountId

        try {
            const response = await axios.get(`http://localhost:8080/accounts/${accountId}`, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `${token}`,
                }
            });

            toggleIsAuth({
                isAuthenticated: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.accountId,

                },
                role: response.data.role,
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
    }

    function logout() {
        toggleIsAuth({
            isAuthenticated: false,
            user: null,
            role: "",
            status: 'done',
        });
        navigate('/');
    }

    const contextData = {
        ...isAuth,
        isAuth: isAuth.isAuthenticated,
        user: isAuth.user,
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