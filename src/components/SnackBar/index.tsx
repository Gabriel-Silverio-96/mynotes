import React from "react";

import { SnackBarContainer } from "./styled";
import { SnackBarProps } from "./types";

const SnackBar: React.FC<SnackBarProps> = ({ typeMessage, message }) => {
    return (
        <SnackBarContainer typeMessage={typeMessage}>
            {message}
        </SnackBarContainer>
    )
}

export default SnackBar
