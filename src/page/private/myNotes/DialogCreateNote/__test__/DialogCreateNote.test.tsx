import { render } from "@testing-library/react";
import { store } from "common/store";
import Layout from "components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import DialogCreateNoteView from "../DialogCreateNoteView";
import { IDialogCreateNote } from "../types/types.component";

const DialogCreateNoteComponent: React.FC<IDialogCreateNote | any> = (props) => {
	const { isOpenDialogCreateNote, onClose, handleChange, errorInputMessage = [], postSaveNote, isLoading } = props;
	return (
		<Provider store={store}>
			<Layout>
				<DialogCreateNoteView
					{...{
						isOpenDialogCreateNote,
						onClose,
						handleChange,
						errorInputMessage,
						postSaveNote,
						isLoading
					}}
				/>
			</Layout>
		</Provider>
	);

};

describe("<DialogCreateNote />", () => {
	it("Should render the component", () => {
		const { container } = render(<DialogCreateNoteComponent />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DialogCreateNoteComponent />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});