import Loading from "components/Loading";
import React from "react";
import { ColorPicker } from "react-color-palette";
import { ButtonColorPicker, ButtonColorPickerContainer, ColorPickerStyle } from "./styled";

const ColorPickerView: React.FC<any> = (props) => {
	const { color, setColor, width, height, open, openAndCloseColorPicker, colorSelect, setColorSelect, theme, loading, ...rest } = props;

	return (
		<>
			<Loading isLoading={loading} messageLoading="Loading" />
			{!loading && (
				<ButtonColorPickerContainer onClick={openAndCloseColorPicker}>
					<ButtonColorPicker color={colorSelect ? colorSelect : color.hex} role="button" />
					<span>{!open ? "Select color" : "Close"}</span>
				</ButtonColorPickerContainer>
			)}
			{open && (
				<ColorPickerStyle>
					<ColorPicker
						{...{ width, height, color }}
						onChange={setColor}
						dark={theme.dark === "dark" ? false : true}
						onChangeComplete={({ hex }) => setColorSelect(hex)}
						{...rest}
					/>
				</ColorPickerStyle>
			)}
		</>
	);
};

export default ColorPickerView;