import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "components/Button";
import FormContainer from "components/FormContainer";
import React, { FormEvent, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import TextArea from "../TextArea";

const TEXTAREA_VALUE = "My text here";
const MESSAGE_ERROR = "Text is required";

const TextAreaRender: React.FC<{ isLoadingData?: boolean }> = ({ isLoadingData = false }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState<null | string>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setText(textAreaRef.current!.value);
    }

    return (
        <ThemeProviderTest>
            <FormContainer title="Text">
                <form onSubmit={onSubmit}>
                    <TextArea
                        ref={textAreaRef}
                        label="Text"
                        name="text"
                        id="text"
                        isLoadingData={isLoadingData}
                        errorMessage={text === "" ? MESSAGE_ERROR : ""}
                    />
                    <Button variant="primary" title="Send" />
                </form>
            </FormContainer>
        </ThemeProviderTest>
    )
};

describe("<TextArea />", () => {
    it("Should render the component", () => {
        const { container } = render(<TextAreaRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<TextAreaRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should show textarea value '${TEXTAREA_VALUE}'`, () => {
        const { container } = render(<TextAreaRender />);
        const textAreaElement = container.querySelector("textarea");
        userEvent.type(textAreaElement!, TEXTAREA_VALUE);

        expect(textAreaElement).toHaveValue(TEXTAREA_VALUE);
    });

    it(`Should show textarea error message '${MESSAGE_ERROR}'`, () => {
        const { container, queryByText } = render(<TextAreaRender />);
        const buttonSend = container.querySelector("button");
        userEvent.click(buttonSend!);

        const errorMessage = queryByText(MESSAGE_ERROR);
        expect(errorMessage).toBeInTheDocument();
    });

    it(`Should not show textarea error message '${MESSAGE_ERROR}'`, () => {
        const { container, queryByText } = render(<TextAreaRender />);
        const textAreaElement = container.querySelector("textarea");
        userEvent.type(textAreaElement!, TEXTAREA_VALUE);

        const buttonSend = container.querySelector("button");
        userEvent.click(buttonSend!);

        const errorMessage = queryByText(MESSAGE_ERROR);
        expect(errorMessage).not.toBeInTheDocument();
    });

    it("Should show loading with hidden visibility", () => {
        const { getByText } = render(<TextAreaRender />);
        const loading = getByText(/loading data/i) as HTMLParagraphElement;
        
        expect(loading.parentElement).toHaveStyle({ visibility: "hidden" });
    });

    it("Should show loading with visible visibility", () => {
        const { container, getByText } = render(<TextAreaRender isLoadingData/>);
        const loading = getByText(/loading data/i) as HTMLParagraphElement;
        
        expect(container.querySelector("textarea")).toBeDisabled();
        expect(loading.parentElement).toHaveStyle({ visibility: "visible" });
    });
})
