import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "components/Button";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import Dialog from "../Dialog";
import { DialogAction } from "../DialogAction/styled";
import DialogBody from "../DialogBody";
import DialogTitle from "../DialogTitle";

const BUTTON_OPEN_TITLE = "Open dialog";
const BUTTON_CLOSE_TITLE = "Close dialog";
const DIALOG_TITLE = "Dialog is open";
const DIALOG_BODY = "Content dialog";

const DialogRender: React.FC<any> = ({ open = false }) => {
	const [isOpen, setIsOpen] = useState<boolean>(open);
	const onOpenDialog = () => setIsOpen((prevState: boolean) => !prevState);
	const onCloseDialog = () => setIsOpen((prevState: boolean) => !prevState);
	return (
		<ThemeProviderTest>
			<Button variant="primary" title={BUTTON_OPEN_TITLE} onClick={onOpenDialog} />
			<Dialog open={isOpen}>
				<DialogTitle onClick={onCloseDialog}>
					<h1>{DIALOG_TITLE}</h1>
				</DialogTitle>
				<DialogBody>
					<p>{DIALOG_BODY}</p>
				</DialogBody>
				<DialogAction>
					<Button variant="primary" title={BUTTON_CLOSE_TITLE} onClick={onCloseDialog} />
				</DialogAction>
			</Dialog>
		</ThemeProviderTest>
	);
};

describe("<Dialog />", () => {
	it("Should render the component", () => {
		const { container } = render(<DialogRender open={true} />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DialogRender open={true} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`Should have closed dialog being ${DIALOG_TITLE} and ${DIALOG_BODY} not visible when open equal false`, () => {
		const { queryByText } = render(<DialogRender />);

		expect(queryByText(DIALOG_TITLE)).toBeNull();
		expect(queryByText(DIALOG_BODY)).toBeNull();
	});

	it(`Should have open
        dialog after click button "${BUTTON_OPEN_TITLE}"
        and after click button "${BUTTON_CLOSE_TITLE}"
        close dialog`,
	async () => {
		const { getByText, queryByText } = render(<DialogRender />);
		const buttonOpenDialog = getByText(BUTTON_OPEN_TITLE);
		userEvent.click(buttonOpenDialog);
		await waitFor(() => {
			expect(queryByText(DIALOG_TITLE)).toBeInTheDocument();
		});

		const buttonCloseDialog = getByText(BUTTON_CLOSE_TITLE);
		userEvent.click(buttonCloseDialog);
		await waitFor(() => {
			expect(queryByText(DIALOG_TITLE)).toBeNull();
		});
	}
	);
});
