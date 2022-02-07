import { snackBar } from "common/store/snackBar/snackBar.action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SnackBar2View from "./SnackBarView";

const SnackBar2: React.FC<any> = ({ typeMessage, message }) => { 
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(snackBar(false, ""))
        }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <SnackBar2View {...{ typeMessage, message }} />
}

export default SnackBar2;