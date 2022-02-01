import React from "react";
import DialogView from "./DialogView";
import { IDialog } from "./types";

const Dialog: React.FC<IDialog> = ({ open, minHeight, size, children }) => {
    return <DialogView {...{ open, minHeight, size, children }} />
}

export default Dialog;