import dark from "assets/styles/themes/dark";
import useThemeStorage from "common/hooks/useThemeStorage";
import React, { useState } from "react";
import "react-color-palette/lib/css/styles.css";
import ColorPickerView from "./ColorPickerView";
import { IColorPicker } from "./types/ColorPicker.component";

const ColorPicker: React.FC<IColorPicker | any> = (props) => {
	const { color, setColor, width = 300, height = 200, loading = false, ...rest } = props;
	const [theme] = useThemeStorage("theme", dark);

	const [colorSelect, setColorSelect] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);

	const openColorPicker = () => setOpen(prevState => !prevState);

	const closeColorPicker = (e: any) => {
		if(e.target.dataset.picker) setOpen(prevState => !prevState);
	};

	return (
		<ColorPickerView
			{...{
				color,
				setColor,
				width,
				height,
				open,
				openColorPicker,
				closeColorPicker,
				colorSelect,
				setColorSelect,
				theme,
				loading,
				...rest
			}}
		/>
	);
};

export default ColorPicker;