import React from "react";
import DialogTitleView from "./DialogTitleView";

const DialogTitle: React.FC = ({ children }) => {
    return <DialogTitleView {...{ children }} />
}

export default DialogTitle;