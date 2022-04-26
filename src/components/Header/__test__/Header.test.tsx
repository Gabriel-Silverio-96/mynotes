import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import light from "assets/styles/themes/light";
import * as variables from "assets/styles/variables";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import AuthProviderTest from "util/test/AuthProviderTest";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import Header from "../Header";

const HeaderRender: React.FC<{ isAuthenticated?: boolean, theme?: DefaultTheme }> = ({ isAuthenticated, theme }) => {
    return (
        <BrowserRouter>
            <AuthProviderTest isAuthenticated={isAuthenticated ? isAuthenticated : false}>
                <ThemeProviderTest theme={theme}>
                    <Header />
                </ThemeProviderTest>
            </AuthProviderTest>
        </BrowserRouter>
    )
}

describe("<Header />", () => {
    it("Should render the component", () => {
        const { container } = render(<HeaderRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<HeaderRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should show background color ${variables.black} when theme dark`, () => {
        const { container } = render(<HeaderRender />);
        const header = container.querySelector("header") as HTMLDivElement;

        expect(header).toHaveStyle({ backgroundColor: variables.black });
    });

    it(`Should show background color ${variables.white} when theme light`, () => {
        const { container } = render(<HeaderRender theme={light} />);
        const header = container.querySelector("header") as HTMLHeadingElement;

        expect(header).toHaveStyle({ backgroundColor: variables.white });
    });

    it("Should show not visible button Login and Create account when authentication is true", () => {
        const { queryByText } = render(<HeaderRender isAuthenticated />);
        const buttonLogin = queryByText(/login/i) as HTMLButtonElement;
        const buttonCreateAccount = queryByText(/create account/i) as HTMLButtonElement;

        expect(buttonLogin).not.toBeInTheDocument();
        expect(buttonCreateAccount).not.toBeInTheDocument();
    });

    it("Should show dropdown when authentication is true", () => {
        const { getByTestId, container } = render(<HeaderRender isAuthenticated />);
        const dropdown = container.querySelector(".dropdown") as HTMLDivElement;
        userEvent.click(dropdown!);
        const dropdownHeader = getByTestId("dropdown-header");

        expect(dropdownHeader).toBeInTheDocument();
    });

    it("Should show href logo '/' when authenticated is false", () => {
        const { container } = render(<HeaderRender />);
        const hrefLogo = container.querySelector("a") as HTMLAnchorElement;

        expect(hrefLogo.pathname).toBe("/");
    });

    it("Should show href logo '/mynotes' when authenticated is true", () => {
        const { container } = render(<HeaderRender isAuthenticated />);
        const hrefLogo = container.querySelector("a") as HTMLAnchorElement;

        expect(hrefLogo.pathname).toBe("/mynotes");
    });
})
