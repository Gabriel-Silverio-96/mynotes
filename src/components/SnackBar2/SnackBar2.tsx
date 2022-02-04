import { snackBar } from "common/store/snackBar/snackBar.action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SnackBar2View from "./SnackBar2View";

const SnackBar2: React.FC<any> = ({ typeMessage, message }) => { 
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(snackBar(false, ""))
        }, 2000)
    }, [])

    return <SnackBar2View {...{ typeMessage, message }} />
}

export default SnackBar2;