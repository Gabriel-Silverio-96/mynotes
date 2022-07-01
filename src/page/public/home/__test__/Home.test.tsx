import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ThemeProviderTest from "util/test/themeProviderTest";
import Home from "../Home";

const PRIMARY_TEXT = "Time to create new notes";
const SECONDARY_TEXT = "Easily and quickly organize your day";

const HomeRender = () => {
	return (
		<BrowserRouter>
			<ThemeProviderTest>
				<Home />
			</ThemeProviderTest>
		</BrowserRouter>
	);
};

describe("Page <HomeRender />", () => {
	it("Should render the component", () => {
		const { container } = render(<HomeRender />);
		expect(container).toBeDefined();
	});

	it("Should unmount the component", () => {
		const div = document.createElement("div");
		ReactDOM.render(<HomeRender />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`Should show title main '${PRIMARY_TEXT}'`, () => {
		const { getByText } = render(<HomeRender />);

		expect(getByText(PRIMARY_TEXT)).toBeInTheDocument();
	});

	it(`Should show text '${SECONDARY_TEXT}'`, () => {
		const { getByText } = render(<HomeRender />);

		expect(getByText(SECONDARY_TEXT)).toBeInTheDocument();
	});

	it("Should show get started button with href to create account", () => {
		const { getByText } = render(<HomeRender />);
		const buttonGetStarted = getByText(/get started/i).parentElement as HTMLAnchorElement;

		expect(buttonGetStarted).toHaveAttribute("href", "/auth/create-account");
	});
});