import styled from "styled-components";

export const Board = styled.div`
	display: flex;
`;

export const Main = styled.main`
	margin-left: 14rem;
	overflow: scroll;
    overflow-x: hidden;
    height: 85vh;
	padding: 1.6rem 1rem 0;
	width: 100%;

	::-webkit-scrollbar-thumb {
		background-color: rgba(104, 104, 104, 30%);
		border-radius: 2rem;
		cursor: all-scroll;
	}

	::-webkit-scrollbar {
		width: 0.5rem;
		height: 0.2rem;
		background-color: transparent;
		border-radius: 2rem;
		cursor: all-scroll;
	}
`;

