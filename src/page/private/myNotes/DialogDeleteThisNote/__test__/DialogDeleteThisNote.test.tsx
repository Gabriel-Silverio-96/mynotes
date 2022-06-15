import { cleanup, render } from "@testing-library/react";
import { store } from "common/store";
import Button from "components/Button";
import Layout from "components/Layout";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import DialogDeleteThisNoteView from "../DialogDeleteThisNoteView";
import { IDialogDeleteThisNote } from "../types/types.component";

afterEach(cleanup);
const DialogDeleteThisNoteComponent: React.FC<IDialogDeleteThisNote | any> = (props) => {
	const [open, setOpen] = useState<boolean>(false);
	const { isOpenDefault, deleteThisNote, isLoading } = props;

	const onOpen = () => setOpen(prevState => !prevState);
	const onClose = () => setOpen(prevState => !prevState);
	return (
		<Provider store={store}>
			<Layout>
				<DialogDeleteThisNoteView
					open={isOpenDefault ? isOpenDefault : open}
					{...{ deleteThisNote, isLoading, onClose }}
				/>
				<Button title="Open" onClick={onOpen} />
			</Layout>
		</Provider>
	);
};

describe("<DialogDeleteThisNote />", () => {
	it("Should render the component", () => {
		const { container } = render(<DialogDeleteThisNoteComponent isOpenDefault />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DialogDeleteThisNoteComponent isOpenDefault />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});