import React from "react";

const DialogBodyView: React.FC = ({ children }) => {
    return (
        <div aria-label="dialog-body">
            {children}
        </div>
    )
}

export default DialogBodyView;