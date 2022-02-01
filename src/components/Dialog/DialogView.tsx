import React from "react";
import { DialogContainer, DialogContent } from "./styled";
import { IDialog } from "./types";

const DialogView: React.FC<IDialog> = ({ minHeight, size, children }) => {
    return (
        <DialogContainer size={size}>
            <DialogContent {...{ size, minHeight }}>
                {children}
            </DialogContent>
        </DialogContainer>
    )
}

export default DialogView;