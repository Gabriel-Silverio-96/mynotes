import { AuthContext } from "provider/authContext";
import React from "react";

const AuthProviderTest: React.FC<{authenticated: boolean}> = ({ children, authenticated }) => {
    return (
        // @ts-ignore
        <AuthContext.Provider value={{ authenticated: authenticated }}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthProviderTest;