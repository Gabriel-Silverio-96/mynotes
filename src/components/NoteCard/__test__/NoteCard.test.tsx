import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import NoteCard from "../NoteCard";
import { INoteCard } from "../types/types.component";

const editNoteClick = jest.fn();
const openDialogDeleteThisNoteClick = jest.fn();

const NOTE_CARD_MOCK = {
	titleNote: "There are many variations of passages of Lorem Ipsum available, but the majority",
	colorNote: "#ff0000",
	editNote: editNoteClick,
	id: "123456",
	observation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
	openDialogDeleteThisNote: openDialogDeleteThisNoteClick
};

const NoteCardRender: React.FC<INoteCard> = (props) => {
	const { colorNote, editNote, id, observation, openDialogDeleteThisNote, titleNote } = props;

	return (
		<ThemeProviderTest>
			<NoteCard {...{ colorNote, editNote, id, observation, openDialogDeleteThisNote, titleNote }} />
		</ThemeProviderTest>
	);
};

describe("<NoNotesCreated />", () => {
	it("Should render the component", () => {
		const { container } = render(<NoteCardRender {...NOTE_CARD_MOCK} />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<NoteCardRender {...NOTE_CARD_MOCK} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`Should show observation with 133 characters (130 characters with 3 dots at the end), 
    due to the maximum of 130 characters`, () => {
		const { container } = render(<NoteCardRender {...NOTE_CARD_MOCK} />);
		const observation = container.querySelector("p") as HTMLParagraphElement;

		expect(observation.textContent?.length).toBe(133);
	});

	it(`Should show titleNote with 43 characters (40 characters + 3 dots at the end), 
    due to the maximum of 40 characters`, () => {
		const { container } = render(<NoteCardRender {...NOTE_CARD_MOCK} />);
		const titleNote = container.querySelector("h3") as HTMLElement;

		expect(titleNote.textContent?.length).toBe(43);
	});

	it("Should show one click called to button editNote and button openDialogDeleteThisNote", () => {
		const { getByTestId } = render(<NoteCardRender {...NOTE_CARD_MOCK} />);
		const buttonEditNote = getByTestId("button-edit-note");
		userEvent.click(buttonEditNote);

		const buttonOpenDialogDeleteThisNote = getByTestId("button-open-dialog-delete-this-note");
		userEvent.click(buttonOpenDialogDeleteThisNote);

		expect(editNoteClick).toHaveBeenCalledTimes(1);
		expect(openDialogDeleteThisNoteClick).toHaveBeenCalledTimes(1);
	});

	it(`Should show note card borderBottomColor '${NOTE_CARD_MOCK.colorNote}'`, () => {
		const { getByTestId } = render(<NoteCardRender {...NOTE_CARD_MOCK} />);
		const noteCard = getByTestId("note-card");                     
		const noteCardBorderBottomColor = (getComputedStyle(noteCard).borderBottomColor);

		expect(noteCardBorderBottomColor).toBe(NOTE_CARD_MOCK.colorNote);
	});
});