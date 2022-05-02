import React from "react";
import { FiAlertOctagon, FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi";
import { Alert, AlertHeader } from "./styled";
import { IAlert } from "./types/types.component";

const AlertView: React.FC<IAlert> = ({ children, severity, alertHeader, open }) => {
	const severityIcon = {
		success: <FiCheckCircle size={20} />,
		error: <FiXCircle size={20} />,
		warning: <FiAlertOctagon size={20} />,
		info: <FiInfo size={20} />,
	};

	return (
		<>
			{open && (
				<Alert severity={severity}>
					{alertHeader && (
						<AlertHeader severity={severity}>
							{severityIcon[severity]}
							<strong>{severity}</strong>
						</AlertHeader>
					)}
					{children}
				</Alert>
			)}
		</>
	);
};

export default AlertView;