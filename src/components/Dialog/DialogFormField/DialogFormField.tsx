import React from "react";
import DialogFormFieldView from "./DialogFormFieldView";

const DialogFormField: React.FC = ({ children }) => {
	return <DialogFormFieldView {... { children }} />;
};

export default DialogFormField;