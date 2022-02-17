import React from "react";
import { DialogAction } from "./styled";

const DialogActionView: React.FC = ({ children }) => {
    return (
        <DialogAction aria-label="dialog-action" className="dialog-action">
            {children}
        </DialogAction>
    )
}

export default DialogActionView;