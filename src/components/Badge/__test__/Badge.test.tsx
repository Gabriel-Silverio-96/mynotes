import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Badge from "../Badge";

const BADGE_TEXT = "Hi, i'm Badge";

describe("<Button />", () => {
    it("Should render the component", () => {
        const { container } = render(<Badge text={BADGE_TEXT} />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<Badge text={BADGE_TEXT} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should have text message "${BADGE_TEXT}"`, () => {
        const { getByText } = render(<Badge text={BADGE_TEXT} />);
        const badgeText = getByText(BADGE_TEXT);
        expect(badgeText).toBeInTheDocument();
    });
})