import React, { useContext } from "react";
import { AuthContext } from "provider/authContext";
import { Redirect, Route } from "react-router";
import { ICustomRoute } from "./types/types.component";
import Header from "components/Header";

const CustomRoute:React.FC<ICustomRoute> = ({ isPrivate, isHeaderVisible = true, ...rest }) => {
	const { authenticated } = useContext(AuthContext);

	if (isPrivate && !authenticated) {
		return <Redirect to="/" />;
	}

	return <>{isHeaderVisible && <Header />}<Route {...rest} /></>;
};

export default CustomRoute;