import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import { store } from "common/store";
import { snackBar } from "common/store/snackBar/snackBar.action";
import Layout from "components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import MyNotes from "../index";
import {
    createNoteSuccess,
    editNoteSuccess,
    errorsInputMessage,
    listNotes,
    listWithOneNote, 
    NEW_NOTE_MOCK, 
    EDIT_NOTE_MOCK
} from "./mock";

const { title_note, observation } = NEW_NOTE_MOCK;

const mock = new MockAdapter(apiMyNotes);
beforeAll(() => {
    mock.reset()
    cleanup()
});
afterEach(cleanup);

const MyNotesRender = () => {
    return (
        <Provider store={store}>
            <ThemeProviderTest>
                <Layout>
                    <MyNotes />
                </Layout>
            </ThemeProviderTest>
        </Provider>
    )
}

describe("Page <MyNotesRender />", () => {
    it("Should render the component", async () => {
        const { container } = render(<MyNotesRender />);
        await waitFor(() => {
            expect(container).toBeDefined();
        })
    });

    it("Should unmount the component", async () => {
        const div = document.createElement("div");
        ReactDOM.render(<MyNotesRender />, div);
        await waitFor(() => {
            ReactDOM.unmountComponentAtNode(div);
        })
    });

    it("Should show loading", async () => {
        mock.onGet("notes/list").reply(200, listNotes);
        const { queryByText } = render(<MyNotesRender />);

        const loading = queryByText(/loading/i);
        expect(loading).toBeInTheDocument();

        await waitFor(() => {
            expect(loading).toHaveStyle({ visibility: "hidden" });
        })
    });

    it("Should show message error input title_note", async () => {
        mock.onPost("notes/create").reply(400, errorsInputMessage);
        const { queryByText } = render(<MyNotesRender />);

        const buttonNew = queryByText(/new/i) as HTMLButtonElement;
        userEvent.click(buttonNew);

        await waitFor(() => {
            const buttonSave = queryByText(/save/i) as HTMLButtonElement;
            userEvent.click(buttonSave);
        })

        await waitFor(() => {
            expect(queryByText("Title note is required and has a minimum of 3 characters")).toBeInTheDocument();
        })
    });

    it(`Create new note, show title '${title_note}' and observation '${observation}'`, async () => {
        mock.onGet("notes/list").reply(200, { list_notes: [] });
        mock.onPost("notes/create").reply(201, createNoteSuccess);
        const { queryByText, container } = render(<MyNotesRender />);

        const buttonNew = queryByText(/new/i) as HTMLButtonElement;
        userEvent.click(buttonNew);

        await waitFor(() => {
            const noNotesCreated = queryByText("You didn't create any notes") as HTMLElement;
            const isOpenDialogCreateNote = queryByText(/create note/i) as HTMLElement;

            expect(isOpenDialogCreateNote).toBeInTheDocument();
            expect(noNotesCreated).toBeInTheDocument();
        });

        const inputTitleNote = container.querySelector("[name='title_note']");
        userEvent.type(inputTitleNote!, title_note);

        const inputObservation = container.querySelector("[name='observation']");
        userEvent.type(inputObservation!, observation);

        const buttonSave = queryByText(/save/i) as HTMLButtonElement;
        userEvent.click(buttonSave);

        const { message, type_message } = createNoteSuccess;
        store.dispatch(snackBar(true, message, type_message));
        expect(queryByText(createNoteSuccess.message)).toBeInTheDocument();

        mock.onGet("notes/list").reply(200, listWithOneNote);

        await waitFor(() => {
            const newNoteCreated = queryByText(title_note) as HTMLElement;
            const isNotOpenDialogCreateNote = queryByText(/create note/i) as HTMLElement;

            expect(newNoteCreated).toBeInTheDocument();
            expect(isNotOpenDialogCreateNote).not.toBeInTheDocument();
        });
    });

    it("Should show at least two note cards", async () => {
        mock.onGet("notes/list").reply(200, listNotes);
        const { queryByText } = render(<MyNotesRender />);

        await waitFor(() => {
            const firstNoteTitle = queryByText(/meeting today/i);
            const secondNoteTitle = queryByText(/backlog/i);

            expect(firstNoteTitle).toBeInTheDocument();
            expect(secondNoteTitle).toBeInTheDocument();
        })
    });

    it("Edit new note", async () => {
        mock.onGet("notes/list").reply(200, listWithOneNote);
        mock.onPut("notes/edit/note_id=3").reply(201, editNoteSuccess);
        const { queryByText, container, getAllByTestId } = render(<MyNotesRender />);
        const { title_note, observation } = EDIT_NOTE_MOCK;

        await waitFor(() => {
            const buttonEditNote = getAllByTestId("button-edit-note").pop() as HTMLButtonElement;
            userEvent.click(buttonEditNote);

            const isOpenDialogEditNote = queryByText(/edit note/i) as HTMLElement;
            expect(isOpenDialogEditNote).toBeInTheDocument();
        });

        const inputTitleNote = container.querySelector("[name='title_note']");
        userEvent.type(inputTitleNote!, title_note);

        const inputObservation = container.querySelector("[name='observation']");
        userEvent.type(inputObservation!, observation);

        const buttonSave = queryByText(/save/i) as HTMLButtonElement;
        userEvent.click(buttonSave);

        const { message, type_message } = editNoteSuccess;
        store.dispatch(snackBar(true, message, type_message));
        expect(queryByText(editNoteSuccess.message)).toBeInTheDocument();
    });
})