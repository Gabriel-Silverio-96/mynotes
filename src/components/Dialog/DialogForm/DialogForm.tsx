import React from "react";
import DialogFormView from "./DialogFormView";
import { IDialogForm } from "./types";

const DialogForm: React.FC<IDialogForm> = ({children, method = "get" }) => {
    return <DialogFormView {... { children, method }} />
}

export default DialogForm;