import { render } from "@testing-library/react";
import Input from "components/FormFields/Input";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import FormContainer from "../FormContainer";

const FORM_TITLE = "Create account";
const FormContainerRender = () => {
	return (
		<ThemeProviderTest>
			<FormContainer title={FORM_TITLE}>
				<Input label="User" typeInput="text" id="user" name="user" />
			</FormContainer>
		</ThemeProviderTest>
	);
};

describe("<FormContainer />", () => {
	it("Should render the component", () => {
		const { container } = render(<FormContainerRender />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<FormContainerRender />, div);
		ReactDOM.unmountComponentAtNode(div);
	});    

	it(`Should have title ${FORM_TITLE}`, () => {
		const { queryByText } = render(<FormContainerRender />);
		const formContainerTitle = queryByText(FORM_TITLE);

		expect(formContainerTitle).toBeInTheDocument();
	});     

	it("Should have input element as child", () => {
		const { container } = render(<FormContainerRender />);
		const inputElement = container.querySelector("input");

		expect(container).toContainElement(inputElement);
	});     
});
