import React from "react";
import DialogActionView from "./DialogActionView";

const DialogAction: React.FC = ({ children }) => {
	return <DialogActionView {... { children }} />;
};

export default DialogAction;