import React from "react";
import { DialogAction } from "./styled";

const DialogActionView: React.FC = ({ children }) => {
    return (
        <DialogAction>
            {children}
        </DialogAction>
    )
}

export default DialogActionView;