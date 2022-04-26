import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import Loading from "../Loading";
import { ILoading } from "../types/types.component";

const LOADING_MESSAGE = "Loading data...";

const LoadingRender: React.FC<ILoading> = (props) => {
    const { isLoading, justIcon, align, messageLoading, size } = props;
    return (
        <ThemeProviderTest>
            <Loading {...{ isLoading, justIcon, align, messageLoading, size }} />
        </ThemeProviderTest>
    )
}

describe("<Loading />", () => {
    it("Should render the component", () => {
        const { container } = render(<LoadingRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<LoadingRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should show loading visibility hidden when isLoading false", () => {
        const { getByTestId } = render(<LoadingRender />);
        const loading = getByTestId("loading");

        expect(getComputedStyle(loading).visibility).toBe("hidden");
    });

    it("Should show loading visibility visible when isLoading true", () => {
        const { getByTestId } = render(<LoadingRender isLoading />);
        const loading = getByTestId("loading");

        expect(getComputedStyle(loading).visibility).toBe("visible");
    });

    it(`Should show loading message ${LOADING_MESSAGE}`, () => {
        const { queryByText } = render(<LoadingRender isLoading messageLoading={LOADING_MESSAGE} />);
        const loadingMessage = queryByText(LOADING_MESSAGE);

        expect(loadingMessage).toBeInTheDocument();
    });

    it("Should show justifyContent loading center, right and left", () => {
        const { getByTestId, rerender } = render(<LoadingRender isLoading align="center" />);
        const loading = getByTestId("loading");
        
        expect(getComputedStyle(loading).justifyContent).toBe("center");
        
        rerender(<LoadingRender isLoading align="right" />);
        expect(getComputedStyle(loading).justifyContent).toBe("right");

        rerender(<LoadingRender isLoading align="left" />);
        expect(getComputedStyle(loading).justifyContent).toBe("left");
    });

    it("Should show width and height equal 50", () => {
        const { container } = render(<LoadingRender isLoading size={50} />);
        const loadingSvg = container.querySelector("svg") as SVGSVGElement;
               
        expect(loadingSvg.getAttribute("width")).toBe("50");
        expect(loadingSvg.getAttribute("height")).toBe("50");
    });
})
