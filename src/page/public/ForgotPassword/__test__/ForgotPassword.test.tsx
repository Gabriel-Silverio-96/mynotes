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
import ForgotPassword from "../ForgotPassword";
import { errorsInputMessage, sendEmail, unregisteredUser } from "./mock";

const EMAIL_MOCK = "email@email.com";

const mock = new MockAdapter(apiMyNotes);
beforeAll(() => mock.reset());
afterEach(cleanup);

const ForgotPasswordRender = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProviderTest>
                    <Layout>
                        <ForgotPassword />
                    </Layout>
                </ThemeProviderTest>
            </Provider>
        </BrowserRouter>
    )
}

describe("Page <ForgotPassword />", () => {
    it("Should render the component", () => {
        const { container } = render(<ForgotPasswordRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<ForgotPasswordRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should show message error input email", async () => {
        mock.onPost("auth/forgot-password").reply(400, errorsInputMessage);

        const { queryByText, getByText } = render(<ForgotPasswordRender />);
        const buttonSend = getByText(/send/i) as HTMLButtonElement;
        userEvent.click(buttonSend);

        await waitFor(() => {
            expect(queryByText("Email is required")).toBeInTheDocument();
        })
    });

    it(`Should show message in snackBar '${unregisteredUser.message}'`, async () => {
        mock.onPost("auth/forgot-password").reply(403, unregisteredUser);

        const { container, queryByText, getByText } = render(<ForgotPasswordRender />);
        const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;
        userEvent.type(inputEmail!, EMAIL_MOCK);

        const buttonSend = getByText(/send/i) as HTMLButtonElement;
        userEvent.click(buttonSend);

        const { message, type_message } = unregisteredUser;
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {
            expect(queryByText(unregisteredUser.message)).toBeInTheDocument();
        })
    });

    it("Send email to user reset password", async () => {
        mock.onPost("auth/forgot-password").reply(200, sendEmail);

        const { container, queryByText, getByText } = render(<ForgotPasswordRender />);
        const inputEmail = container.querySelector("[name='email']") as HTMLInputElement;
        userEvent.type(inputEmail!, EMAIL_MOCK);

        const buttonSend = getByText(/send/i) as HTMLButtonElement;
        userEvent.click(buttonSend);
        
        const { message, type_message } = sendEmail;
        store.dispatch(snackBar(true, message, type_message));
        
        expect(getByText(/sending/i)).toBeInTheDocument();
        await waitFor(() => {
            expect(queryByText(sendEmail.message)).toBeInTheDocument();
            expect(queryByText(/check your email/i)).toBeInTheDocument();
            expect(queryByText(EMAIL_MOCK)).toBeInTheDocument();
        })
    });
})