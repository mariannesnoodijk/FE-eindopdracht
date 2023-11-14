import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuthenticated: false,
        user: null,
    });
    const navigate = useNavigate();

    function login() {
        toggleIsAuth({
            isAuthenticated: true,
            user: {
                emailaddress: '',
                // TODO: ik gebruik hieronder user id (dus username??)
                id: '',
            },
        });
        navigate('/accountoverview');
    }

    function logout() {
        toggleIsAuth({
            isAuthenticated: false,
            user: null,
        });
        navigate('/');
    }

    const contextData = {
        ...isAuth,
        login: login,
        logout: logout,
    }

    return (
        <>
            <AuthContext.Provider value={contextData}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthContextProvider;