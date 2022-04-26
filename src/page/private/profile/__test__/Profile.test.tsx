import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import { store } from "common/store";
import { snackBar } from "common/store/snackBar/snackBar.action";
import Layout from "components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import ThemeProviderTest from "util/test/themeProviderTest";
import Profile from "../Profile";
import { errorsInputMessage, FULL_NAME_MOCK, profileEditSuccess, userData } from "./mock";

const mock = new MockAdapter(apiMyNotes);
beforeAll(() => mock.reset());
beforeEach(() => mock.onGet("auth/account").reply(200, userData));
afterEach(cleanup);

const ProfileRender = () => {
    return (
        <Provider store={store}>
            <ThemeProviderTest>
                <Layout>
                    <Profile />
                </Layout>
            </ThemeProviderTest>
        </Provider>
    )
}

describe("Page <Profile />", () => {
    it("Should render the component", async () => {
        const { container } = render(<ProfileRender />);
        await waitFor(() => expect(container).toBeDefined());
    });

    it("Should unmount the component", async () => {
        const div = document.createElement("div");
        ReactDOM.render(<ProfileRender />, div);
        await waitFor(() => ReactDOM.unmountComponentAtNode(div));
    });

    it("Should show loading", async () => {
        const { getAllByTestId } = render(<ProfileRender />);

        await waitFor(() => {
            const loadingData = getAllByTestId("loading");
            expect(!loadingData.length).toBeFalsy();
        });
    });

    it(`Should show full name '${userData.full_name}' and email '${userData.email}'`, async () => {
        const { container } = render(<ProfileRender />);

        await waitFor(() => {
            const inputFullName = container.querySelector("[name='full_name']") as HTMLInputElement;
            const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;

            expect(inputFullName).toHaveDisplayValue(userData.full_name);
            expect(inputEmail).toHaveDisplayValue(userData.email);
        });
    });

    it("Should show input email disabled", async () => {
        const { container } = render(<ProfileRender />);

        await waitFor(() => {
            const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;

            expect(inputEmail).toBeDisabled();
        });
    });

    it("Should show message error input full name", async () => {
        mock.onPut("auth/account").reply(400, errorsInputMessage);       
        const { container, queryByText } = render(<ProfileRender />);

        const inputFullName = container.querySelector("[name='full_name']") as HTMLInputElement;
        await waitFor(() => {            
            fireEvent.change(inputFullName, { target: { value: "" } });
        })
        
        const buttonSave = queryByText(/save/i) as HTMLButtonElement;
        userEvent.click(buttonSave);
        
        await waitFor(() => {            
            expect(queryByText("Add full name")).toBeInTheDocument();
        })
    });

    it("Edit profile", async () => {
        mock.onPut("auth/account").reply(200, profileEditSuccess);
        const { container, queryByText } = render(<ProfileRender />);

        const inputFullName = container.querySelector("[name='full_name']") as HTMLInputElement;
        await waitFor(() => {
            fireEvent.change(inputFullName, { target: { value: FULL_NAME_MOCK } });
            
            const buttonSave = queryByText(/save/i) as HTMLButtonElement;
            userEvent.click(buttonSave);
        });
        expect(inputFullName.value).toBe(FULL_NAME_MOCK);

        const { message, type_message } = profileEditSuccess;
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {
            expect(queryByText(profileEditSuccess.message)).toBeInTheDocument();
        })
    });
})