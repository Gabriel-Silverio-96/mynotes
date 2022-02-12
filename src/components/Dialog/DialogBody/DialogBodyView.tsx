import React from "react";
import { DialogBody } from "./styled";

const DialogBodyView: React.FC = ({ children }) => {
    return (
        <DialogBody aria-label="dialog-body">
            {children}
        </DialogBody>
    )
}

export default DialogBodyView;