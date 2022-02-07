import React from "react";
import { SnackBar } from "./styled";
import { ISnackBar } from "./types";

const SnackBarView: React.FC<ISnackBar> = ({ typeMessage, message, align }) => {
    return (
        <SnackBar typeMessage={typeMessage} align={align}>
            <h4>{typeMessage}</h4>
            <p>{message}</p>
        </SnackBar>
    )
}

export default SnackBarView;