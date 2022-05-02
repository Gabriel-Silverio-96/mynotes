import React from "react";
import DialogFormView from "./DialogFormView";
import { IDialogForm } from "./types";

const DialogForm: React.FC<IDialogForm> = ({ onSubmit, children, method = "get" }) => {
	return <DialogFormView {... { onSubmit, children, method }} />;
};

export default DialogForm;