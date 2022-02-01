import React from "react";
import { DialogForm } from "./styled";
import { IDialogForm } from "./types";

const DialogFormView: React.FC<IDialogForm> = ({ method, children }) => {
    return (
        <DialogForm {...{ method }}>
            {children}
        </DialogForm>
    )
}

export default DialogFormView;