import React from "react";
import { Color } from "react-color-palette";
import { ColorPickerProps } from "react-color-palette/lib/interfaces/ColorPicker.interface";
import { DefaultTheme } from "styled-components";

export interface IColorPicker extends Omit<ColorPickerProps, "onChange"> {
	setColor: React.Dispatch<React.SetStateAction<Color>>;
	open: boolean;
	loading: boolean;
	openColorPicker: () => void;
	closeColorPicker: () => void;
	colorSelect: string;
	setColorSelect: React.Dispatch<React.SetStateAction<string>>;
	theme: DefaultTheme;
}