import React from "react";
import { SnackBar, SnackBarProgressBar } from "./styled";
import { ISnackBar } from "./types";

const SnackBarView: React.FC<ISnackBar> = ({ typeMessage, message, align, progressBar, delay}) => {
    return (
        <SnackBar typeMessage={typeMessage} align={align}>
            <h4>{typeMessage}</h4>
            <p>{message}</p>
            {progressBar && <SnackBarProgressBar delay={delay} />}
        </SnackBar>
    )
}

export default SnackBarView;