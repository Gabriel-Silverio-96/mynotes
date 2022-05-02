import React from "react";
import DialogView from "./DialogView";
import { IDialog } from "./types/types.component";

const Dialog: React.FC<IDialog> = ({ open = false, minHeight, size, children }) => {
	return <DialogView {...{ open, minHeight, size, children }} />;
};

export default Dialog;