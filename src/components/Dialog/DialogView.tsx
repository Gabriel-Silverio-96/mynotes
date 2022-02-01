import React from "react";
import { DialogContainer, DialogContent } from "./styled";
import { IDialog } from "./types";

const DialogView: React.FC<IDialog> = ({ open = false, minHeight, size, children }) => {
    return (
        <>
            {open && (
                <DialogContainer size={size} aria-label="dialog">
                    <DialogContent {...{ size, minHeight }}>
                        {children}
                    </DialogContent>
                </DialogContainer>
            )}
        </>
    )
}

export default DialogView;