import React, { useContext } from "react";
import { AuthContext } from "provider/authContext";
import { Redirect, Route } from "react-router";

interface CustomRouteProps {
    isPrivate: boolean;
}

const CustomRoute:React.FC<CustomRouteProps> = ({ isPrivate, ...rest }) => {
    const { authenticated } = useContext(AuthContext)

    if (isPrivate && !authenticated) {
        return <Redirect to="/" />
    }

    return <Route {...rest} />
}

export default CustomRoute;