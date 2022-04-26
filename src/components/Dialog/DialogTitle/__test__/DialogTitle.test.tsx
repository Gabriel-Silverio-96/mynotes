import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import DialogTitle from "../DialogTitle";

const DIALOG_TITLE = "Register user";
const DialogTitleRender: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(true);
    const onClick = () => setOpen((prevState: boolean) => !prevState);
    
    return (
        <>
            <ThemeProviderTest>
                <DialogTitle onClick={onClick}>
                    <h1>{DIALOG_TITLE}</h1>
                    {isOpen && <p>Modal is open</p>}
                </DialogTitle>
            </ThemeProviderTest>
        </>
    )
}

describe("<DialogTitle />", () => {
    it("Should render the component", () => {
        const { container } = render(<DialogTitleRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<DialogTitleRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });  

    it(`Should have title message "${DIALOG_TITLE}"`, () => {
        const { container } = render(<DialogTitleRender />);
        const h1Title = container.querySelector("h1");
        
        expect(h1Title).toHaveTextContent(DIALOG_TITLE);        
    });  

    it("Should have the message 'Modal is open' not visible after click button close", () => {
        const { container, getByText } = render(<DialogTitleRender />);        
        const messageModalIsOpen = getByText(/modal is open/i) as HTMLParagraphElement;
        expect(messageModalIsOpen).toBeInTheDocument();

        const buttonClose = container.querySelector("button") as HTMLButtonElement;
        userEvent.click(buttonClose!);

        expect(messageModalIsOpen).not.toBeInTheDocument();
    });  
})