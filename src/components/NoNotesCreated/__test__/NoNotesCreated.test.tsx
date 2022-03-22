import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import NoNotesCreated from "../NoNotesCreated";

const MESSAGE_MAIN = "You didn't create any notes";
const MESSAGE_AUXILIARY  = "Create a new note";

const NoNotesCreatedRender = () => {
    return (
        <ThemeProviderTest>
            <NoNotesCreated />
        </ThemeProviderTest>
    )
}

describe("<NoNotesCreated />", () => {
    it("Should render the component", () => {
        const { container } = render(<NoNotesCreatedRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<NoNotesCreatedRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should show message main '${MESSAGE_MAIN}'`, () => {
        const { container } = render(<NoNotesCreatedRender />);
        const h1 = container.querySelector("h1") as HTMLElement;

        expect(h1.textContent).toBe(MESSAGE_MAIN);
    });

    it(`Should show auxiliary message '${MESSAGE_AUXILIARY}'`, () => {
        const { container } = render(<NoNotesCreatedRender />);
        const p = container.querySelector("p") as HTMLParagraphElement;

        expect(p.textContent).toBe(MESSAGE_AUXILIARY);
    });
})