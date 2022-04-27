import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "common/store";
import { snackBar } from "common/store/snackBar/snackBar.action";
import Button from "components/Button";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ThemeProviderTest from "util/test/themeProviderTest";
import SnackBar from "../SnackBar";

const MESSAGE_SNACK_BAR = "Message test";
const SNACK_BAR_BACKGROUND_COLOR = "#ff0000";

const SnackBarRender: React.FC<{ buttonClose?: boolean }> = ({ buttonClose }) => {
    const { isOpen, message, type_message } = store.getState().snackBar;
    return (
        <Provider store={store}>
            <ThemeProviderTest>
                <Button title="Open SnackBar" onClick={() => store.dispatch(snackBar(true, MESSAGE_SNACK_BAR, "error"))} />
                {isOpen && (
                    <SnackBar message={message}
                        typeMessage={type_message}
                        align="topCenter"
                        buttonClose={buttonClose ? buttonClose : false}
                        delay={100000000}
                    />
                )}
            </ThemeProviderTest>
        </Provider>
    )
}

describe("<SnackBar />", () => {
    it("Should render the component", () => {
        const { container, getByText } = render(<SnackBarRender />);
        const buttonOpenSnackBar = getByText(/open snackbar/i) as HTMLButtonElement;
        userEvent.click(buttonOpenSnackBar);

        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<SnackBarRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should show message '${MESSAGE_SNACK_BAR}'`, () => {
        const { getByText } = render(<SnackBarRender />);
        const buttonOpenSnackBar = getByText(/open snackbar/i) as HTMLButtonElement;
        userEvent.click(buttonOpenSnackBar);

        expect(getByText(MESSAGE_SNACK_BAR)).toBeInTheDocument();
    });

    it(`Should show message '${MESSAGE_SNACK_BAR}'`, () => {
        const { getByText } = render(<SnackBarRender />);
        const buttonOpenSnackBar = getByText(/open snackbar/i) as HTMLButtonElement;
        userEvent.click(buttonOpenSnackBar);

        expect(getByText(MESSAGE_SNACK_BAR)).toBeInTheDocument();
    });

    it(`Should show backgroundColor '${SNACK_BAR_BACKGROUND_COLOR}' when typeMessage is error`, () => {
        const { getByTestId, getByText } = render(<SnackBarRender />);
        const buttonOpenSnackBar = getByText(/open snackbar/i) as HTMLButtonElement;
        userEvent.click(buttonOpenSnackBar);

        expect(getByTestId("snack-bar")).toHaveStyle({ backgroundColor: SNACK_BAR_BACKGROUND_COLOR });
    });

    it("Should show button close not visible when buttonClose is false", () => {
        const { container, getByText } = render(<SnackBarRender />);
        const buttonOpenSnackBar = getByText(/open snackbar/i) as HTMLButtonElement;
        userEvent.click(buttonOpenSnackBar);

        const buttonClose = container.querySelector("[arial-label='button-close-snack-bar']") as HTMLButtonElement;
        expect(buttonClose).not.toBeInTheDocument();
    });

    it("Should show snackBar is open and button close visible", async () => {
        const { container, getByText } = render(<SnackBarRender buttonClose />);
        const buttonOpenSnackBar = getByText(/open snackbar/i) as HTMLButtonElement;
        userEvent.click(buttonOpenSnackBar);
        const { isOpen } = store.getState().snackBar;

        const buttonClose = container.querySelector("svg") as SVGSVGElement;

        expect(isOpen).toBeTruthy();
        expect(buttonClose).toBeInTheDocument();
    });
})