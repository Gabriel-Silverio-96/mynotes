import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import apiMyNotes from "service/apiMyNotes";
import { AuthContextProps } from "./types";

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token: string | null = localStorage.getItem(("token") || null);

        if (token) {
            apiMyNotes.defaults.headers!.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true);
            setLoading(false)
        }

        return setLoading(false)
    }, [history]);    

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <AuthContext.Provider value={{
            authenticated,
            setAuthenticated,
            loading,            
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };