import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ReactDOM from "react-dom";
import { FiBookmark } from "react-icons/fi";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import Button from "../Button";
import { IButton } from "../types/types.component";

const BUTTON_TITLE = "Click me";
const ButtonRender: React.FC<IButton> = ({ ...rest }) => {
    return (
        <ThemeProviderTest>
            <Button {...rest} />
        </ThemeProviderTest>
    )
}

describe("<Button />", () => {
    it("Should render the component", () => {
        const { container } = render(<ButtonRender variant="primary" />);
        
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<ButtonRender variant="primary" />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should have button title "${BUTTON_TITLE}"`, () => {
        const { getByText } = render(<ButtonRender variant="primary" title={BUTTON_TITLE} />);
        const buttonTitle = getByText(BUTTON_TITLE);

        expect(buttonTitle).toBeInTheDocument();
    });

    it(`Should have button title "${BUTTON_TITLE}" and icon <FiBookmark />`, () => {
        const { getByText, container } = render(<ButtonRender iconButton={<FiBookmark />} title={BUTTON_TITLE} />);
        const buttonTitle = getByText(BUTTON_TITLE);
        const svgIcon = container.querySelector("svg");

        expect(buttonTitle).toBeInTheDocument();
        expect(buttonTitle).toContainElement(svgIcon);
    });

    it(`Should have button is loading`, () => {
        const { getByText, container } = render(<ButtonRender variant="primary" isLoading messageLoading="Loading" />);
        const buttonMessageLoading = getByText(/loading/i);        
        const buttonElement = container.querySelector("button");
        const svgIconLoading = container.querySelector("svg");
        
        expect(buttonMessageLoading).toBeInTheDocument();
        expect(buttonElement).toContainElement(svgIconLoading);        
        expect(buttonElement?.disabled).toBe(true);        
    });

    it(`Should have one called click button`, () => {
        const onClick = jest.fn();
        const { getByText } = render(<ButtonRender variant="primary" title={BUTTON_TITLE} onClick={onClick}/>);
        const buttonElement = getByText(BUTTON_TITLE);
        userEvent.click(buttonElement);

        expect(onClick).toHaveBeenCalledTimes(1);        
    });
})