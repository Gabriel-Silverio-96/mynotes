import React from "react";
import { DialogContainer, DialogContent } from "./styled";
import { IDialog } from "./types/types.component";

const DialogView: React.FC<IDialog> = ({ open, minHeight, size, children }) => {
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