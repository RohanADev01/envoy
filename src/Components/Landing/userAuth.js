import React, { useState, useEffect, useContext, useMemo, createContext } from "react";

export const AuthDataContext = createContext({ user: null, login: () => {}, logout: () => {} });

export const useAuthDataContext = () => useContext(AuthDataContext);

const AuthDataProvider = (props) => {
    const [user, setUser] = useState(null);

    return (
        <AuthDataContext.Provider
            value={{
                user: localStorage.getItem("user"),
                login: (user) => {
                    setUser(user);
                    localStorage.setItem("user", user);
                },
                logout: () => {
                    setUser(null);
                    localStorage.setItem("user", "");
                },
            }}
            {...props}
        />
    );
};

export default AuthDataProvider;
