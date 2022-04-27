import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import AuthProviderTest from "util/test/authProviderTest";
import ThemeProviderTest from "util/test/themeProviderTest";
import DropdownHeader from "../DropdownHeader";

const DropdownHeaderRender = () => {
    return (
        <AuthProviderTest>
            <ThemeProviderTest>
                <BrowserRouter>
                    <DropdownHeader />
                </BrowserRouter>
            </ThemeProviderTest>
        </AuthProviderTest>
    )
}

beforeEach(() => {
    apiMyNotes.defaults.headers!.Authorization = "token";
})

describe("<Dropdown />", () => {
    it("Should render the component", () => {
        const { container } = render(<DropdownHeaderRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<DropdownHeaderRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should show dropdown items <li /> with have content", () => {
        const { container } = render(<DropdownHeaderRender />);
        const dropdownButton = container.querySelector(".dropdown");
        userEvent.click(dropdownButton!);
        const liDropdown = container.querySelectorAll("li");

        expect(!!liDropdown.length).toBeTruthy();
    });

    it("Should show empty headers.authorization when user logout", () => {
        const { container, queryByText } = render(<DropdownHeaderRender />);
        const dropdownButton = container.querySelector(".dropdown");
        userEvent.click(dropdownButton!);

        const liExit = queryByText(/exit/i);
        userEvent.click(liExit!);

        expect(apiMyNotes.defaults.headers!.Authorization).toBe("");
    });
})
