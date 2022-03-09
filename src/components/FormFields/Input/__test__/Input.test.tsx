import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "components/Button";
import FormContainer from "components/FormContainer";
import React, { FormEvent, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import Input from "../Input";

const INPUT_VALUE = "mynotes";
const MESSAGE_ERROR = "Name is required";

const InputRender: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<null | string>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        setName(inputRef.current!.value);
    }

    return (
        <ThemeProviderTest>
            <FormContainer title="Name user">
                <form onSubmit={onSubmit}>
                    <Input          
                        ref={inputRef}
                        label="Name"
                        name="name"
                        id="name"
                        typeInput="text"
                        isLoadingData={false}
                        errorMessage={name === "" ? MESSAGE_ERROR : ""}
                    />
                    <Button variant="primary" title="Send" />
                </form>
            </FormContainer>
        </ThemeProviderTest>
    )
}

describe("<Input />", () => {
    it("Should render the component", () => {
        const { container } = render(<InputRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<InputRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should show input value '${INPUT_VALUE}'`, () => {
        const { container } = render(<InputRender />);
        const inputElement = container.querySelector("input");
        userEvent.type(inputElement!, INPUT_VALUE);

        expect(inputElement).toHaveValue(INPUT_VALUE);
    });

    it(`Should show input error message '${MESSAGE_ERROR}'`, () => {
        const { container, queryByText } = render(<InputRender />);
        const buttonSend = container.querySelector("button");
        userEvent.click(buttonSend!);

        const errorMessage = queryByText(MESSAGE_ERROR);
        expect(errorMessage).toBeInTheDocument();
    });

    it(`Should not show input error message '${MESSAGE_ERROR}'`, () => {
        const { container, queryByText } = render(<InputRender />);
        const inputName = container.querySelector("input");
        userEvent.type(inputName!, INPUT_VALUE);

        const buttonSend = container.querySelector("button");
        userEvent.click(buttonSend!);

        const errorMessage = queryByText(MESSAGE_ERROR);
        expect(errorMessage).not.toBeInTheDocument();
    });
})
