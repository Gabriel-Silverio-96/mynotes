import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import apiMyNotes from "service/apiMyNotes";
import { AuthContextProps, UserDataProps } from "./types";

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [userData, setUserData] = useState({} as UserDataProps);

    useEffect(() => {
        const token: string | null = localStorage.getItem(("token") || null);

        if (token) {
            apiMyNotes.defaults.headers!.Authorization = `Bearer ${token}`
            setAuthenticated(true);
            setLoading(false)
        }

        return setLoading(false)
    }, [history]);

    useEffect(() => {
        const userData: string | null = localStorage.getItem(("userData") || null);
        if(userData) {
            setUserData(JSON.parse(userData));
        }
    }, [history])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <AuthContext.Provider value={{
            authenticated,
            setAuthenticated,
            loading,
            userData,
            setUserData,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };