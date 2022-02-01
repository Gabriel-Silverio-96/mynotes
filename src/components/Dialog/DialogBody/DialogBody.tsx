import React from "react";
import DialogBodyView from "./DialogBodyView";

const DialogBody: React.FC = ({ children }) => {   
    return <DialogBodyView {... { children }} />
}

export default DialogBody;