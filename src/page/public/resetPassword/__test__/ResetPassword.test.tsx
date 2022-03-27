import { cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import { store } from "common/store";
import { snackBar } from "common/store/snackBar/snackBar.action";
import Layout from "components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import customRender from "util/test/customRender";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import ResetPassword from "../ResetPassword";
import { errorsInputMessage, invalidToken, resetPasswordSuccess } from "./mock";

const PASSWORD_MOCK = "123456789";
const TOKEN_MOCK = "eyJhbGciOiJ";

const mock = new MockAdapter(apiMyNotes);
beforeAll(() => mock.reset());
afterEach(cleanup);

const ResetPasswordRender = () => {
    return (
        <Provider store={store}>
            <ThemeProviderTest>
                <Layout>
                    <ResetPassword />
                </Layout>
            </ThemeProviderTest>
        </Provider>
    )
}

describe("Page <ResetPassword />", () => {
    it("Should render the component", () => {
        const { container } = customRender(
            <Route path="/auth/reset-password/token=:token">
                <ResetPasswordRender />
            </Route>, { route: `/auth/reset-password/token=${TOKEN_MOCK}` }
        );
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <BrowserRouter>
                <Route path={`/auth/reset-password/token=${TOKEN_MOCK}`}>
                    <ResetPasswordRender />
                </Route>
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should show message error input password when empty or with minimun 8 characters", async () => {
        mock.onPost(`auth/reset-password/token=${TOKEN_MOCK}`).reply(400, errorsInputMessage);
        const { getByText, queryByText } = customRender(
            <Route path="/auth/reset-password/token=:token">
                <ResetPasswordRender />
            </Route>, { route: `/auth/reset-password/token=${TOKEN_MOCK}` }
        );

        const buttonSave = getByText(/save/i) as HTMLButtonElement;
        userEvent.click(buttonSave);

        await waitFor(() => {
            expect(queryByText("Password is required and has a minimum of 8 characters")).toBeInTheDocument();
        })
    });

    it("Invalid token", async () => {
        mock.onPost(`auth/reset-password/token=${TOKEN_MOCK}`).reply(500, invalidToken);
        const { container, getByText, queryByText } = customRender(
            <Route path="/auth/reset-password/token=:token">
                <ResetPasswordRender />
            </Route>, { route: `/auth/reset-password/token=${TOKEN_MOCK}` }
        );

        const inputPassword = container.querySelector("[name='password']") as HTMLInputElement;
        userEvent.type(inputPassword!, PASSWORD_MOCK);

        const buttonSave = getByText(/save/i) as HTMLButtonElement;
        userEvent.click(buttonSave);
        const { message, type_message } = invalidToken;
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {
            expect(queryByText(invalidToken.message)).toBeInTheDocument();
        })
    });

    it("Reset password successfully", async () => {
        mock.onPost(`auth/reset-password/token=${TOKEN_MOCK}`).reply(200, resetPasswordSuccess);
        const { container, getByText, queryByText } = customRender(
            <Route path="/auth/reset-password/token=:token">
                <ResetPasswordRender />
            </Route>, { route: `/auth/reset-password/token=${TOKEN_MOCK}` }
        );

        const inputPassword = container.querySelector("[name='password']") as HTMLInputElement;
        userEvent.type(inputPassword!, PASSWORD_MOCK);

        const buttonSave = getByText(/save/i) as HTMLButtonElement;
        userEvent.click(buttonSave);
        const { message, type_message } = resetPasswordSuccess;
        store.dispatch(snackBar(true, message, type_message));

        await waitFor(() => {
            expect(queryByText(resetPasswordSuccess.message)).toBeInTheDocument();
            expect(queryByText(/your password has been reset successfully/i)).toBeInTheDocument();
            expect(queryByText("Back to login")).toBeInTheDocument();
        })
    });
})