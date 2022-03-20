import { render } from "@testing-library/react";
import * as variables from "assets/styles/variables";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProviderTest from "util/test/ThemeProviderTest";
import Logo from "../Logo";
import { ILogo } from "../types/types.component";

const LogoRender: React.FC<ILogo> = (props) => {
    const { themeTitle, responsive } = props;
    return (
        <ThemeProviderTest>
            <Logo {...{ themeTitle, responsive }} />
        </ThemeProviderTest>
    )
}

describe("<Logo />", () => {
    it("Should render the component", () => {
        const { container } = render(<LogoRender themeTitle="dark" />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<LogoRender themeTitle="dark" />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should show logo color '${variables.white}' when themeTitle dark`, () => {
        const { container } = render(<LogoRender themeTitle="dark" />);
        const logoSvg = container.querySelector("svg") as SVGSVGElement | any;
        const logoSvgFill = logoSvg.firstChild!.getAttribute("fill");

        expect(logoSvgFill).toBe(variables.white)
    });

    it(`Should show logo color '${variables.black}' when themeTitle light`, () => {
        const { container } = render(<LogoRender themeTitle="light" />);
        const logoSvg = container.querySelector("svg") as SVGSVGElement | any;
        const logoSvgFill = logoSvg.firstChild!.getAttribute("fill");

        expect(logoSvgFill).toBe(variables.black);
    });

    it("Should show logo width '1.875rem' when responsive true", () => {
        const { container } = render(<LogoRender themeTitle="dark" responsive />);
        const logoWrapper = container.querySelector("svg")!.parentNode as HTMLDivElement;
        
        expect(getComputedStyle(logoWrapper).width).toBe("1.875rem");
    });
})