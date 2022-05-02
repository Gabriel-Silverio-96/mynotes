import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import DialogAction from "../DialogAction";

const DialogActionRender: React.FC = ({ children }) => {
	return (
		<ThemeProviderTest>
			<DialogAction>
				{children}
			</DialogAction>
		</ThemeProviderTest>
	);
};

describe("<DialogAction />", () => {
	it("Should render the component", () => {
		const { container } = render(<DialogActionRender />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DialogActionRender />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Should have render <span /> with message 'Test message'", () => {
		const { getByText } = render(<DialogActionRender><span>Test message</span></DialogActionRender>);
		const dialogActionChildren = getByText(/test message/i);
        
		expect(dialogActionChildren).toBeInTheDocument();
	});
});