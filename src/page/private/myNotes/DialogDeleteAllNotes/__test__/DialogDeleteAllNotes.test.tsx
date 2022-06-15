import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "common/store";
import Button from "components/Button";
import Layout from "components/Layout";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import DialogDeleteAllNotesView from "../DialogDeleteAllNotesView";
import { IDeleteAllNote } from "../types/types.component";

const TITLE_DIALOG = "Delete all notes";

afterEach(cleanup);
const DialogDeleteAllNotesComponent: React.FC<IDeleteAllNote | any> = (props) => {
	const [open, setOpen] = useState<boolean>(false);
	const { isOpenDefault, deleteAllNotes, isLoading } = props;

	const onOpen = () => setOpen(prevState => !prevState);
	const onClose = () => setOpen(prevState => !prevState);
	return (
		<Provider store={store}>
			<Layout>
				<DialogDeleteAllNotesView
					open={isOpenDefault ? isOpenDefault : open}
					{...{ deleteAllNotes, isLoading, onClose }}
				/>
				<Button title="Open" onClick={onOpen} />
			</Layout>
		</Provider>
	);
};

describe("<DialogDeleteAllNotes />", () => {
	it("Should render the component", () => {
		const { container } = render(<DialogDeleteAllNotesComponent isOpenDefault />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DialogDeleteAllNotesComponent isOpenDefault />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`Should not show title dialog ${TITLE_DIALOG} when dialog is close`, () => {
		const { queryByText, getByText } = render(<DialogDeleteAllNotesComponent />);
		const buttonOpenDialog = getByText("Open") as HTMLButtonElement;
		userEvent.click(buttonOpenDialog);

		const buttonCloseDialog = getByText("No") as HTMLButtonElement;
		userEvent.click(buttonCloseDialog);

		expect(queryByText(TITLE_DIALOG)).not.toBeInTheDocument();
	});

	it(`Should show title dialog ${TITLE_DIALOG} when dialog is open`, () => {
		const { getByText } = render(<DialogDeleteAllNotesComponent />);
		const buttonOpenDialog = getByText("Open") as HTMLButtonElement;
		userEvent.click(buttonOpenDialog);

		expect(getByText(TITLE_DIALOG)).toBeInTheDocument();
	});

	it("Should show one called deleteAllNotes when click button yes", () => {
		const deleteAllNotes = jest.fn();
		const { getByText } = render(<DialogDeleteAllNotesComponent {...{ deleteAllNotes }} isOpenDefault />);

		const buttonConfirmDialog = getByText("Yes") as HTMLButtonElement;
		userEvent.click(buttonConfirmDialog);

		expect(deleteAllNotes).toHaveBeenCalledTimes(1);
	});

	it("Should show Deleting message when isLoading equal true", () => {
		const { getByText } = render(<DialogDeleteAllNotesComponent isOpenDefault isLoading />);
		expect(getByText("Deleting")).toBeInTheDocument();
	});
});