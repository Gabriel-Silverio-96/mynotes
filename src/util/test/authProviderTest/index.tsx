import { AuthContext } from "provider/authContext";
import React, { useState } from "react";

const AuthProviderTest: React.FC<{ isAuthenticated?: boolean }> = ({ children, isAuthenticated }) => {
    const [authenticated, setAuthenticated] = useState<boolean>(isAuthenticated ? isAuthenticated : false);
    return (
        // @ts-ignore
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviderTest;