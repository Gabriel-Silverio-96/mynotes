import {
	render as rtlRender
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import React, { ReactElement } from "react";
import { Router } from "react-router-dom";

interface ICustomRender {
    route: string;
    history?: any;
}

export default function customRender(
	ui: ReactElement,
	{
		route =  "/",
		history = createMemoryHistory({ initialEntries: [route] }),
	} = {} as ICustomRender
) {
	const Wrapper: React.FC = ({ children }) => (
		<Router history={history}>{children}</Router>
	);

	return {
		...rtlRender(ui, { wrapper: Wrapper }),
		history,
	};
}