import dark from "assets/styles/themes/dark";
import React, { createContext, useState } from "react";
import { DefaultTheme } from "styled-components";
import { ContextThemeProps } from "./types";

export const ContextTheme = createContext({} as ContextThemeProps);

export const ThemeNameProvider: React.FC = ({ children }) => {
	const [themeContext, setThemeContext] = useState<DefaultTheme>(() => {
		const themeStorage = localStorage.getItem("theme");
		if (themeStorage) {
			return JSON.parse(themeStorage);
		}
		return dark;
	});

	return (
		<ContextTheme.Provider value={
			{
				themeContext,
				setThemeContext
			}
		}>
			{children}
		</ContextTheme.Provider>
	);
};