import { snackBar } from "common/store/snackBar/snackBar.action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SnackBarView from "./SnackBarView";
import { ISnackBar } from "./types";

const SnackBar: React.FC<ISnackBar> = ({ typeMessage, message, align = "bottomRight" }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(snackBar(false, ""))
        }, 2000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return <SnackBarView {...{ typeMessage, message, align }} />
}

export default SnackBar;