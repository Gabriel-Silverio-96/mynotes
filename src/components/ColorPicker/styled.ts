import * as variables from "assets/styles/variables";
import styled from "styled-components";

export const ColorPickerContainer = styled.div`
	position: relative;
`;

export const ButtonColorPickerContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;

	span {
		color: ${props => props.theme.colors.textColorParagraph}
	}
`;

export const ButtonColorPicker = styled.div<any>`
	border: 0.3rem solid ${variables.white};
	border-radius: 50%;
	width: 1rem;
	height: 1rem;
	background-color: ${({color}) => color};
`;

export const ColorPickerStyle = styled.div`
	background-color: transparent;
    width: 100%;
    height: 94vh;
    position: absolute;
    top: -9rem;
    right: 0;
    z-index: 1;
    margin-top: 2rem;

	.rcp {
		position: absolute;
		z-index: 1;
		margin-top: 1rem;
		top: 8rem;
	}
`;