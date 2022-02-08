import { snackBar } from "common/store/snackBar/snackBar.action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SnackBarView from "./SnackBarView";
import { ISnackBar } from "./types";

const SnackBar: React.FC<ISnackBar> = (props) => {
    const { typeMessage, message, align = "bottomRight", progressBar = true, delay = 2000 } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(snackBar(false, ""));
        }, delay)
    }, [dispatch, delay]);
    
    return <SnackBarView {...{ typeMessage, message, align, progressBar, delay }} />
}

export default SnackBar;