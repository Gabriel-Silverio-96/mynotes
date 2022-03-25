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
import ThemeProviderTest from "util/test/ThemeProviderTest";
import Login from "../Login";
import { errorsInputMessage, incorrectEmailorPassword, userNotExist, loggedSuccess } from "./mock";

const EMAIL_MOCK = "email@email.com";
const PASSWORD_MOCK = "123456789";

const mock = new MockAdapter(apiMyNotes);
beforeAll(() => mock.reset());
afterEach(cleanup);

const LoginRender = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProviderTest>
                    <Layout>
                        <Login />
                    </Layout>
                </ThemeProviderTest>
            </Provider>
        </BrowserRouter>
    )
}

describe("Page <Login />", () => {
    it("Should render the component", () => {
        const { container } = render(<LoginRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<LoginRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should show message errors input email and password", async () => {
        mock.onPost("auth/login").reply(400, errorsInputMessage);

        const { getByTestId, queryByText } = render(<LoginRender />);
        const buttonLogin = getByTestId("button-login") as HTMLButtonElement;
        userEvent.click(buttonLogin!);

        await waitFor(() => {
            expect(queryByText("Email is required")).toBeInTheDocument();
            expect(queryByText("Password is required")).toBeInTheDocument();
        })
    });

    it(`Should show message in snackBar '${userNotExist.message}'`, async () => {
        mock.onPost("auth/login").reply(403, userNotExist);

        const { container, getByTestId, queryByText } = render(<LoginRender />);
        const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;
        userEvent.type(inputEmail!, EMAIL_MOCK);

        const inputPassword = container.querySelector("[name='password']") as HTMLInputElement;
        userEvent.type(inputPassword!, PASSWORD_MOCK);

        const buttonLogin = getByTestId("button-login") as HTMLButtonElement;
        userEvent.click(buttonLogin!);
        const { message, type_message } = userNotExist;
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {
            expect(queryByText(userNotExist.message)).toBeInTheDocument();
        })
    });

    it(`Should show message in snackBar '${incorrectEmailorPassword.message}'`, async () => {
        mock.onPost("auth/login").reply(403, incorrectEmailorPassword);

        const { container, getByTestId, queryByText } = render(<LoginRender />);
        const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;
        userEvent.type(inputEmail!, EMAIL_MOCK);

        const inputPassword = container.querySelector("[name='password']") as HTMLInputElement;
        userEvent.type(inputPassword!, PASSWORD_MOCK);

        const buttonLogin = getByTestId("button-login") as HTMLButtonElement;
        userEvent.click(buttonLogin!);
        const { message, type_message } = incorrectEmailorPassword;        
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {
            expect(queryByText(incorrectEmailorPassword.message)).toBeInTheDocument();
        })
    });
    
    it(`Should show message in snackBar '${loggedSuccess.message}'`, async () => {
        const { container, getByTestId, queryByText } = render(<LoginRender />);
        const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;
        userEvent.type(inputEmail!, EMAIL_MOCK);

        const inputPassword = container.querySelector("[name='password']") as HTMLInputElement;
        userEvent.type(inputPassword!, PASSWORD_MOCK);
        
        const buttonLogin = getByTestId("button-login") as HTMLButtonElement;
        userEvent.click(buttonLogin!);
        mock.onPost("auth/login").reply(200, loggedSuccess);
        
        const { message, type_message } = loggedSuccess;        
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {           
            expect(queryByText(loggedSuccess.message)).toBeInTheDocument();
        })
    });
})