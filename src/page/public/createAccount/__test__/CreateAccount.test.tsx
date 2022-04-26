import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import { store } from "common/store";
import { snackBar } from "common/store/snackBar/snackBar.action";
import Layout from "components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import ThemeProviderTest from "util/test/themeProviderTest";
import CreateAccount from "../CreateAccount";
import { createAccountSuccess, errorsInputMessage, userAlreadyExist } from "./mock";

const NAME_MOCK = "John Foe";
const EMAIL_MOCK = "email@email.com";
const PASSWORD_MOCK = "123456789";

const mock = new MockAdapter(apiMyNotes);
beforeAll(() => mock.reset());
afterEach(cleanup);

const CreateAccountRender = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProviderTest>
                    <Layout>
                        <CreateAccount />
                    </Layout>
                </ThemeProviderTest>
            </Provider>
        </BrowserRouter>
    )
}

describe("Page <CreateAccount />", () => {
    it("Should render the component", () => {
        const { container } = render(<CreateAccountRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<CreateAccountRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should show message errors input full_name, email and password", async () => {
        mock.onPost("auth/create-account").reply(400, errorsInputMessage);

        const { getByTestId, queryByText } = render(<CreateAccountRender />);
        const buttonCreate = getByTestId("button-create") as HTMLButtonElement;        
        userEvent.click(buttonCreate!);

        await waitFor(() => {
            expect(queryByText("Add full name")).toBeInTheDocument();
            expect(queryByText("Email is required")).toBeInTheDocument();
            expect(queryByText("Password is required and has a minimum of 8 characters")).toBeInTheDocument();
        })
    });

    it(`Should show message in snackBar '${userAlreadyExist.message}'`, async () => {
        mock.onPost("auth/create-account").reply(403, userAlreadyExist);

        const { container, getByTestId, queryByText } = render(<CreateAccountRender />);
        const inputFullName = container.querySelector("[name='full_name']") as HTMLInputElement;
        userEvent.type(inputFullName!, NAME_MOCK);

        const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;
        userEvent.type(inputEmail!, EMAIL_MOCK);

        const inputPassword = container.querySelector("[name='password']") as HTMLInputElement;
        userEvent.type(inputPassword!, PASSWORD_MOCK);

        const buttonCreate = getByTestId("button-create") as HTMLButtonElement;                
        userEvent.click(buttonCreate!);

        const { message, type_message } = userAlreadyExist;
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {
            expect(queryByText(userAlreadyExist.message)).toBeInTheDocument();
        })
    });

    it(`Should show message in snackBar '${createAccountSuccess.message}'`, async () => {
        mock.onPost("auth/create-account").reply(201, createAccountSuccess);

        const { container, getByTestId, queryByText } = render(<CreateAccountRender />);
        const inputFullName = container.querySelector("[name='full_name']") as HTMLInputElement;
        userEvent.type(inputFullName!, NAME_MOCK);

        const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;
        userEvent.type(inputEmail!, EMAIL_MOCK);

        const inputPassword = container.querySelector("[name='password']") as HTMLInputElement;
        userEvent.type(inputPassword!, PASSWORD_MOCK);

        const buttonCreate = getByTestId("button-create") as HTMLButtonElement;                
        userEvent.click(buttonCreate!);

        const { message, type_message } = createAccountSuccess;
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {
            expect(queryByText(createAccountSuccess.message)).toBeInTheDocument();
        })
    });
})