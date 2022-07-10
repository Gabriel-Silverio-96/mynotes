import React from "react";
import Aside from "./Aside";
import { Board, Main } from "./styled";

const BoardView: React.FC<any> = () => {
	return (
		<Board>
			<Aside />
			<Main>

			</Main>
		</Board>
	);
};

export default BoardView;