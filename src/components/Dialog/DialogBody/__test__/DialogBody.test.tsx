import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import DialogBody from "../DialogBody";

const DialogBodyRender: React.FC = ({ children }) => {
    return (
        <ThemeProviderTest>
            <DialogBody>
                {children}
            </DialogBody>
        </ThemeProviderTest>
    )
}

describe("<DialogBody />", () => {
    it("Should render the component", () => {
        const { container } = render(<DialogBodyRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<DialogBodyRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should have render <span /> with message 'Test message'", () => {
        const { getByText } = render(<DialogBodyRender><span>Test message</span></DialogBodyRender>);
        const dialogActionChildren = getByText(/test message/i);
        
        expect(dialogActionChildren).toBeInTheDocument();
    });
})