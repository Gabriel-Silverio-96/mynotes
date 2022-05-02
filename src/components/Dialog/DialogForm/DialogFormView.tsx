import React from "react";
import { DialogForm } from "./styled";
import { IDialogForm } from "./types";

const DialogFormView: React.FC<IDialogForm> = ({ method, onSubmit, children }) => {
	return (
		<DialogForm {...{ method, onSubmit }}>
			{children}
		</DialogForm>
	);
};

export default DialogFormView;