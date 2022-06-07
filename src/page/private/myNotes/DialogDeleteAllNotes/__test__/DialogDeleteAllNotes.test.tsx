import { cleanup, render } from "@testing-library/react";
import { store } from "common/store";
import Button from "components/Button";
import Layout from "components/Layout";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import DialogDeleteAllNotesView from "../DialogDeleteAllNotesView";
import { IDeleteAllNote } from "../types/types.component";

afterEach(cleanup);
const DialogDeleteAllNotesComponent: React.FC<IDeleteAllNote | any> = (props) => {
	const [open, setOpen] = useState<boolean>(false);
	const { isOpenDefault, handleChange, errorInputMessage = [], postSaveNote, isLoading } = props;

	const onOpen = () => setOpen(prevState => !prevState);
	const onClose = () => setOpen(prevState => !prevState);
	return (
		<Provider store={store}>
			<Layout>
				<DialogDeleteAllNotesView
					open={isOpenDefault ? isOpenDefault : open}
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
});