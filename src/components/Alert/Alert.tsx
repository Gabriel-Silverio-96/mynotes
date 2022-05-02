import React from "react";
import AlertView from "./AlertView";
import { IAlert } from "./types/types.component";

const Alert: React.FC<IAlert> = ({ children, severity, alertHeader, open = true }) => {
	return <AlertView {... { children, severity, alertHeader, open }} />;
};

export default Alert;