import React from "react";
import DialogTitleView from "./DialogTitleView";
import { IDialogTitle } from "./types";

const DialogTitle: React.FC<IDialogTitle> = ({ onClick, children }) => {
	return <DialogTitleView {...{ onClick, children }} />;
};

export default DialogTitle;