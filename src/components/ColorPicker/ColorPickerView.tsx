import Loading from "components/Loading";
import React from "react";
import { ColorPicker } from "react-color-palette";
import { ButtonColorPicker, ButtonColorPickerContainer, ColorPickerContainer, ColorPickerStyle } from "./styled";

const ColorPickerView: React.FC<any> = (props) => {
	const {
		color,
		setColor,
		width,
		height,
		open,
		openColorPicker,
		colorSelect,
		setColorSelect,
		theme,
		loading,
		closeColorPicker,
		...rest
	} = props;

	return (
		<>
			<Loading isLoading={loading} messageLoading="Loading" />
			{!loading && (
				<ColorPickerContainer>
					<ButtonColorPickerContainer onClick={openColorPicker}>
						<ButtonColorPicker color={colorSelect ? colorSelect : color.hex} role="button" />
						<span>Select color</span>
					</ButtonColorPickerContainer>
					{open && (
						<ColorPickerStyle data-picker="close" onClick={closeColorPicker}>
							<ColorPicker
								{...{ width, height, color }}
								onChange={setColor}
								dark={theme.dark === "dark" ? false : true}
								onChangeComplete={({ hex }) => setColorSelect(hex)}
								{...rest}
							/>
						</ColorPickerStyle>
					)}

				</ColorPickerContainer>
			)}

		</>
	);
};

export default ColorPickerView;