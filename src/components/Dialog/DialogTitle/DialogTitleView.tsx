import Button from "components/Button";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { DialogTitle, DialogTitleContent } from "./styled";

const DialogTitleView: React.FC<any> = ({ children }) => {
    return (
        <DialogTitle>
            <DialogTitleContent>
                {children}
            </DialogTitleContent>

            <Button
                variant="text"
                data-modal="close"                
                iconButton={<IoIosClose data-modal="close" size={25} />}
            />
        </DialogTitle>
    )
}

export default DialogTitleView;