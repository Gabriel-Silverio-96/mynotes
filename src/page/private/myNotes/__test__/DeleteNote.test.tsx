import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import { store } from "common/store";
import { snackBar } from "common/store/snackBar/snackBar.action";
import Layout from "components/Layout";
import React from "react";
import { Provider } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import MyNotes from "../index";
import { deleteAllNoteSuccess, deleteOneNoteSuccess, listNotes } from "./mock";

const mock = new MockAdapter(apiMyNotes);
beforeAll(() => mock.reset());
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

describe("Delete notes <MyNotesRender />", () => { 
    it("Delete one note", async () => {
        mock.onGet("notes/list").reply(200, listNotes);
        mock.onGet("notes/delete-this/note_id=2").reply(200, deleteOneNoteSuccess);

        const { queryByText, container } = render(<MyNotesRender />);

        await waitFor(() => {
            const buttonDeleteThisNote = container.querySelector("[id='2']") as HTMLButtonElement;
            userEvent.click(buttonDeleteThisNote);
            
            const isOpenDialogDeleteOneNote = queryByText("Delete this note");
            expect(isOpenDialogDeleteOneNote).toBeInTheDocument();

            const buttonConfirmDelete = queryByText("Yes") as HTMLButtonElement;
            userEvent.click(buttonConfirmDelete!);
        })

        const { message, type_message } = deleteOneNoteSuccess;
        store.dispatch(snackBar(true, message, type_message));   
        expect(queryByText(deleteOneNoteSuccess.message)).toBeInTheDocument();        
    });

    it("Delete all note", async () => {
        mock.onGet("notes/list").reply(200, listNotes);
        mock.onGet("notes/delete-all").reply(200, deleteAllNoteSuccess);

        const { queryByText, getByTestId } = render(<MyNotesRender />);

        await waitFor(() => {
            const buttonDeleteThisNote = getByTestId("button-delete-all-notes") as HTMLButtonElement;
            userEvent.click(buttonDeleteThisNote);
            
            const isOpenDialogDeleteOneNote = queryByText("Delete all notes");
            expect(isOpenDialogDeleteOneNote).toBeInTheDocument();

            const buttonConfirmDelete = queryByText("Yes") as HTMLButtonElement;
            userEvent.click(buttonConfirmDelete!);
        })

        const { message, type_message } = deleteAllNoteSuccess;
        store.dispatch(snackBar(true, message, type_message));   
        expect(queryByText(deleteAllNoteSuccess.message)).toBeInTheDocument();        
    });
})
