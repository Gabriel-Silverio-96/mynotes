import React from "react";
import { DialogFormField } from "./styled";

const DialogFormFieldView: React.FC = ({ children }) => {
	return (
		<DialogFormField>
			{children}
		</DialogFormField>
	);
};

export default DialogFormFieldView;