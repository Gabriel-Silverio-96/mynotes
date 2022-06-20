import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "common/store";
import Button from "components/Button";
import { COLOR_PICKER_INITAL_STATE } from "components/ColorPicker/util";
import Layout from "components/Layout";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import DialogCreateNoteView from "../DialogCreateNoteView";
import { IDialogCreateNote } from "../types/types.component";

const TITLE_DIALOG = "Create Note";
const MOCK_TITLE = "Title create";
const MOCK_OBSERVATION = "Title create";
const MOCK_MESSAGE = "Title note is required and has a minimum of 3 characters";
const MOCK_ERRORS_MESSAGE = [
	{ value: "", msg: MOCK_MESSAGE, param: "title_note", location: "body" }
];

afterEach(cleanup);
const DialogCreateNoteComponent: React.FC<IDialogCreateNote | any> = (props) => {
	const [open, setOpen] = useState<boolean>(false);
	const { isOpenDefault, handleChange, errorInputMessage = [], postSaveNote, setColor, isLoading } = props;

	const onOpen = () => setOpen(prevState => !prevState);
	const onClose = () => setOpen(prevState => !prevState);
	return (
		<Provider store={store}>
			<Layout>
				<DialogCreateNoteView
					color={COLOR_PICKER_INITAL_STATE}
					setColor={setColor}
					isOpenDialogCreateNote={isOpenDefault ? true : open}
					{...{
						onClose,
						handleChange,
						errorInputMessage,
						postSaveNote,
						isLoading
					}}
				/>
				<Button title="Open" onClick={onOpen} />
			</Layout>
		</Provider>
	);
};

describe("<DialogCreateNote />", () => {
	it("Should render the component", () => {
		const { container } = render(<DialogCreateNoteComponent isOpenDefault />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DialogCreateNoteComponent isOpenDefault />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`Should not show title dialog ${TITLE_DIALOG} when dialog is close`, () => {
		const { queryByText, getByText } = render(<DialogCreateNoteComponent />);
		const buttonOpenDialog = getByText("Open") as HTMLButtonElement;
		userEvent.click(buttonOpenDialog);

		const buttonCloseDialog = getByText("Close") as HTMLButtonElement;
		userEvent.click(buttonCloseDialog);

		expect(queryByText(TITLE_DIALOG)).not.toBeInTheDocument();
	});

	it(`Should show title dialog ${TITLE_DIALOG} when dialog is open`, () => {
		const { getByText } = render(<DialogCreateNoteComponent />);
		const buttonOpenDialog = getByText("Open") as HTMLButtonElement;
		userEvent.click(buttonOpenDialog);

		expect(getByText(TITLE_DIALOG)).toBeInTheDocument();
	});

	it("Should show one called postSaveNote when submit form", () => {
		const postSaveNote = jest.fn();
		const { getByText } = render(<DialogCreateNoteComponent isOpenDefault {...{ postSaveNote }} />);
		const buttonSave = getByText("Save") as HTMLButtonElement;
		userEvent.click(buttonSave);

		expect(postSaveNote).toHaveBeenCalledTimes(1);
	});

	it(`Should show ${MOCK_TITLE.length + MOCK_OBSERVATION.length} called when typing in input title and textarea observation`, () => {
		const handleChange = jest.fn();
		const { getByTestId } = render(<DialogCreateNoteComponent isOpenDefault {...{ handleChange }} />);
		const inputTitleNote = getByTestId("create-dialog-title");
		const textareaObeservation = getByTestId("create-dialog-observation");

		userEvent.type(inputTitleNote, MOCK_TITLE);
		userEvent.type(textareaObeservation, MOCK_OBSERVATION);

		expect(handleChange).toHaveBeenCalledTimes(MOCK_TITLE.length + MOCK_OBSERVATION.length);
	});

	it("Should show errors message when errorInputMessage is not empty", () => {
		const { getByText } = render(<DialogCreateNoteComponent isOpenDefault errorInputMessage={MOCK_ERRORS_MESSAGE} />);
		expect(getByText(MOCK_MESSAGE)).toBeInTheDocument();
	});

	it("Should show Saving message when isLoading equals true", () => {
		const { getByText } = render(<DialogCreateNoteComponent isOpenDefault isLoading />);
		expect(getByText("Saving")).toBeInTheDocument();
	});
});