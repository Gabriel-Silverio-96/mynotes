import React from "react";
import DialogView from "./DialogView";
import { IDialog } from "./types";

const Dialog: React.FC<IDialog> = ({ minHeight, size, children }) => {
    return <DialogView {...{ minHeight, size, children }} />
}

export default Dialog;