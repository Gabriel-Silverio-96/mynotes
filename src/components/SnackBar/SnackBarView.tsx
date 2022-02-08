import Button from "components/Button";
import React from "react";
import { SnackBar, SnackBarProgressBar, SnackBarHeader } from "./styled";
import { ISnackBar } from "./types";
import { FiX } from "react-icons/fi";

const SnackBarView: React.FC<ISnackBar> = (props) => {
    const { typeMessage, message, align, progressBar, delay, closeSnackBar, buttonClose} = props;
    return (
        <SnackBar typeMessage={typeMessage} align={align}>
            <SnackBarHeader>
                <h4>{typeMessage}</h4>
                
                {buttonClose && (
                    <Button 
                        iconButton={<FiX size={17}/>}
                        variant="text"
                        style={{padding: 0}}
                        onClick={closeSnackBar}
                    />
                )}
            </SnackBarHeader>
            <p>{message}</p>
            {progressBar && <SnackBarProgressBar delay={delay} />}
        </SnackBar>
    )
}

export default SnackBarView;