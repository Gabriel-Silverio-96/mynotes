import { IDataMessageResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import { INoteList, INoteListData } from "../../NoteList/types/types.component";

const errorsInputMessage = {
	errors: [
		{ value: "", msg: "Title note is required and has a minimum of 3 characters", param: "title_note", location: "body" },
	]
};

const NEW_NOTE_MOCK = {
	color_note: "#9C10FF",
	title_note: "New note mock",
	observation: "Mock observation"
};

const EDIT_NOTE_MOCK = {
	note_id: "3",
	color_note: "#9C10FF",
	title_note: "Edit test",
	observation: "",
	created_at: "2022-03-21T22:09:42.000Z"
};

const listWithOneNote = {
	list_notes: [
		{
			note_id: "3",
			...NEW_NOTE_MOCK,
			created_at: "2022-03-21T22:09:42.000Z"
		}
	]
};

const listNotes = {
	list_notes: [
		{
			note_id: "1",
			color_note: "#9C10FF",
			title_note: "Meeting today",
			observation: "Lorem Ipsum is simply dummy",
			created_at: "2022-03-21T22:09:42.000Z"
		},
		{
			note_id: "2",
			color_note: "#9C10FF",
			title_note: "Backlog",
			observation: "Contrary to popular belief",
			created_at: "2022-03-21T22:09:42.000Z"
		}
	]
};


const createNoteSuccess: IDataMessageResponse = {
	type_message: "success",
	message: "Note created successfully"
};

const editNoteSuccess: IDataMessageResponse = {
	type_message: "success",
	message: "Note edited successfully"
};

const deleteOneNoteSuccess: IDataMessageResponse = {
	type_message: "success",
	message: "Note deleted"
};

const deleteAllNoteSuccess: IDataMessageResponse = {
	type_message: "success",
	message: "Note deleted"
};

export {
	errorsInputMessage,
	listWithOneNote,
	listNotes, 
	createNoteSuccess,
	editNoteSuccess,
	deleteOneNoteSuccess,
	deleteAllNoteSuccess,
	NEW_NOTE_MOCK,
	EDIT_NOTE_MOCK,
};
