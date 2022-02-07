import React from "react";
import { SnackBar } from "./styled";

const SnackBar2View: React.FC<any> = ({ typeMessage, message }) => {
    return (
        <SnackBar typeMessage={typeMessage}>
            {message}
        </SnackBar>
    )
}

export default SnackBar2View;