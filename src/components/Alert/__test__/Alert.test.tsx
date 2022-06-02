import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Alert from "../Alert";
import { IAlert } from "../types/types.component";

const MESSAGE = "My message";

const AlertRenderComponent: React.FC<IAlert> = ({ children, severity, alertHeader }) => {
	const [isOpenAlert, setIsOpenAlert] = useState<boolean>(true);
	const onClick = () => setIsOpenAlert((prevState: boolean) => !prevState) ;

	return (
		<>
			<button onClick={onClick}>Close</button>
			<Alert open={isOpenAlert} severity={severity} alertHeader={alertHeader}>{children}</Alert>
		</>
	);
};

describe("<Alert />", () => {
	it("Should render the component", () => {
		const { container } = render(<AlertRenderComponent severity="success">{MESSAGE}</AlertRenderComponent>);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<AlertRenderComponent severity="success">{MESSAGE}</AlertRenderComponent>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Should have show message alert", () => {
		const { getByText } = render(<AlertRenderComponent severity="success">{MESSAGE}</AlertRenderComponent>);
		const messageAlert = getByText(MESSAGE);

		expect(messageAlert).toBeInTheDocument();
	});

	it("Should have active header", () => {
		const { getByText, container } = render(<AlertRenderComponent alertHeader severity="success">{MESSAGE}</AlertRenderComponent>);
		const svgIcon = container.querySelector("svg");
		const severitySuccess = getByText(/success/i);

		expect(svgIcon).toBeInTheDocument();
		expect(severitySuccess).toBeInTheDocument();
	});

	it("Should with closed alert", () => {
		const { getByText } = render(<AlertRenderComponent severity="error">{MESSAGE}</AlertRenderComponent>);
		const buttonEl = getByText(/close/i);
		const severityError = getByText(MESSAGE);
		userEvent.click(buttonEl);

		expect(severityError).not.toBeInTheDocument();
	});
});