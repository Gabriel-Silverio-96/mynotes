import { snackBar } from "common/store/snackBar/snackBar.action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SnackBarView from "./SnackBarView";
import { ISnackBar } from "./types/types.component";

const SnackBar: React.FC<ISnackBar> = (props) => {
	const { typeMessage,
		message, align = "bottomRight",
		progressBar = true,
		delay = 2500, buttonClose = true
	} = props;
	const dispatch = useDispatch();

	const closeSnackBar = () => {
		dispatch(snackBar(false, ""));
	};

	useEffect(() => {
		setTimeout(() => {
			dispatch(snackBar(false, ""));
		}, delay);
	}, [dispatch, delay]);

	return <SnackBarView {...{ typeMessage, message, align, progressBar, delay, closeSnackBar, buttonClose }} />;
};

export default SnackBar;