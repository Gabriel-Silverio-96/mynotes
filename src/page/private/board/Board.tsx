import React, { useEffect } from "react";
import BoardView from "./BoardView";

const Board: React.FC = () => {
	useEffect(():any => {
		document.body.style.overflow = "hidden";
		return () => document.body.style.overflow = "visible";
	}, []);
	return <BoardView />;
};

export default Board;