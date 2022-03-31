import { cleanup, render, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { store } from "common/store";
import Layout from "components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import MyNotes from "../index";
import { listNotes } from "./mock";

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

    it("Should show button delete all disabled when no note is created", async () => {
        mock.onGet("notes/list").reply(200, { list_notes: [] });
        const { getByTestId } = render(<MyNotesRender />);

        await waitFor(() => {
            const buttonDeleteThisNote = getByTestId("button-delete-all-notes") as HTMLButtonElement;
            expect(buttonDeleteThisNote).toBeDisabled();
        })
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
})