import { fireEvent, render } from "@testing-library/react";
import Button from "components/Button";
import { DialogFormField } from "components/Dialog/DialogFormField/styled";
import Input from "components/FormFields/Input";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import DialogForm from "../DialogForm";
import { IDialogForm } from "../types";

const DialogFormRender: React.FC<IDialogForm> = ({ onSubmit, method }) => {
	return (
		<ThemeProviderTest>
			<DialogForm onSubmit={onSubmit} method={method}>
				<DialogFormField>
					<Input label="User" name="user" id="user" typeInput="text" data-testid="input-user" />
				</DialogFormField>
				<Button title="Submit" />
			</DialogForm>
		</ThemeProviderTest>
	);
};

describe("<DialogForm />", () => {
	it("Should render the component", () => {
		const { container } = render(<DialogFormRender />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DialogFormRender />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Should have input with value 'mynotes' and one called submit button", () => {
		const onSubmit = jest.fn();
		const { getByText, getByTestId } = render(<DialogFormRender method="get" onSubmit={onSubmit} />);
		const buttonSubmit = getByText(/submit/i) as HTMLButtonElement;
		const inputUser = getByTestId("input-user") as HTMLInputElement;
		fireEvent.change(inputUser, { target: { value: "mynotes" } });
		fireEvent.submit(buttonSubmit);

		expect(inputUser).toHaveValue("mynotes");
		expect(onSubmit).toHaveBeenCalledTimes(1);
	});
});