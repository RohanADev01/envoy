import React, { useState, useEffect, useContext, useMemo, createContext } from "react";

export const AuthDataContext = createContext(null);

export const useAuthDataContext = () => useContext(AuthDataContext);

const AuthDataProvider = (props) => {
    const [authData, setAuthData] = useState({ user: null });

    // The first time the component is rendered, it tries to fetch the auth data from cookie/localStorage etc.
    useEffect(() => {
        const currentAuthData = localStorage.getItem("user");
        if (currentAuthData) {
            setAuthData(currentAuthData);
        }
    }, []);

    const onLogout = () => {
        setAuthData({ user: null });
    };

    const onLogin = (newUserToken) => {
        setAuthData({ user: newUserToken });
    };

    // update onLogin and onLogout on each render
    // const authDataValue = useMemo(() => { ...authData, onLogin, onLogout }, [authData]);

    return <AuthDataContext.Provider value={{ ...authData, onLogin, onLogout }} {...props} />;
};

export default AuthDataProvider;
