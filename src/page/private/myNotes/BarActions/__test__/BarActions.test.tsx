import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "common/store";
import Layout from "components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ThemeProviderTest from "util/test/themeProviderTest";
import BarActionsView from "../BarActionsView";
import { IBarAction } from "../types";

const BarActionRenderComponent: React.FC<IBarAction | any> = (props) => {
	const { openDialogDeleteAllNotes, noNotesCreated, openDialogCreateNote } = props;
	return (
		<Provider store={store}>
			<ThemeProviderTest>
				<Layout>
					<BarActionsView {...{ openDialogDeleteAllNotes, noNotesCreated, openDialogCreateNote }} />
				</Layout>
			</ThemeProviderTest>
		</Provider>
	);

};

describe("<BarAction />", () => {
	it("Should render the component", () => {
		const { container } = render(<BarActionRenderComponent />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<BarActionRenderComponent />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Should have one called click button new note", () => {
		const openDialogCreateNote = jest.fn();
		const { getByTestId } = render(<BarActionRenderComponent {...{ openDialogCreateNote }} />);
		const buttonNewNote = getByTestId("button-new-note") as HTMLButtonElement;
		userEvent.click(buttonNewNote);

		expect(openDialogCreateNote).toHaveBeenCalledTimes(1);
	});

	it("Should have one called click button icon delete all note", () => {
		const openDialogDeleteAllNotes = jest.fn();
		const { getByTestId } = render(<BarActionRenderComponent {...{ openDialogDeleteAllNotes }} />);
		const buttonDeleteAll = getByTestId("button-delete-all-notes") as HTMLButtonElement;
		userEvent.click(buttonDeleteAll);

		expect(buttonDeleteAll).not.toBeDisabled();
		expect(openDialogDeleteAllNotes).toHaveBeenCalledTimes(1);
	});

	it("Should show button delete all note disabled when noNotesCreated equal true", () => {
		const { getByTestId } = render(<BarActionRenderComponent noNotesCreated={true} />);
		const buttonDeleteAll = getByTestId("button-delete-all-notes") as HTMLButtonElement;

		expect(buttonDeleteAll).toBeDisabled();
	});
});