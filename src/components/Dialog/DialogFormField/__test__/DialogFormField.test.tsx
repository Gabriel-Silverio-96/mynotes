import { render } from "@testing-library/react";
import Input from "components/FormFields/Input";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import DialogFormField from "../DialogFormField";

const DialogFormFieldRender: React.FC = () => {
	return (
		<ThemeProviderTest>
			<DialogFormField>
				<Input label="User" name="user" id="user" typeInput="text" data-testid="input-user" />
			</DialogFormField>
		</ThemeProviderTest>
	);
};

describe("<DialogFormField />", () => {
	it("Should render the component", () => {
		const { container } = render(<DialogFormFieldRender />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DialogFormFieldRender />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Should have input children inside <DialogFormField>", () => {
		const { container, getByTestId } = render(<DialogFormFieldRender />);
		const inputUser = getByTestId("input-user");
        
		expect(container).toContainElement(inputUser);
	});
});