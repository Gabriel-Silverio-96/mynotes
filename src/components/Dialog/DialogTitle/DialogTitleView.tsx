import Button from "components/Button";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { DialogTitle, DialogTitleContent } from "./styled";
import { IDialogTitle } from "./types";

const DialogTitleView: React.FC<IDialogTitle> = ({ onClick, children }) => {
    return (
        <DialogTitle aria-label="dialog-title">
            <DialogTitleContent>
                {children}
            </DialogTitleContent>

            <Button
                variant="text"
                data-modal="close"                
                iconButton={<IoIosClose data-modal="close" size={25} />}
                onClick={onClick}
            />
        </DialogTitle>
    )
}

export default DialogTitleView;