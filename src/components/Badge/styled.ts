import styled, { DefaultTheme, ThemeProps } from "styled-components";
import * as variables from "assets/styles/variables";
import { IBadgeStyled, IBadgeVariant } from "./types/types.styled";

const BadgeVariant: IBadgeVariant = {
	default: {
		backgroundColor: `${variables.color_neutral_gray_medium_2}`,
		color: `${variables.white}`,
	},
	primary: {
		backgroundColor: `${variables.color_primary}`,
		color: `${variables.white}`,
	},
	secondary: {
		backgroundColor: `${variables.color_secondary}`,
		color: `${variables.black}`,
	},
	danger: {
		backgroundColor: `${variables.color_danger}`,
		color: `${variables.white}`,
	},
	success: {
		backgroundColor: `${variables.color_success}`,
		color: `${variables.white}`,
	},
	text: {
		backgroundColor: "transparent",
		color: (props: ThemeProps<DefaultTheme>) => props.theme.colors.textColorParagraph
	}
};

export const Badge = styled.div<IBadgeStyled>`
    background-color: ${({ variant }) => BadgeVariant[variant!].backgroundColor};
    color: ${({ variant }) => BadgeVariant[variant!].color};;
    width: fit-content;
    padding: 0.4rem;
    border-radius: 0.5rem;
    font-size: 0.7rem;
`;