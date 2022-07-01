import styled, { DefaultTheme, ThemeProps } from "styled-components";
import * as variables from "assets/styles/variables";
import { IBadgeStyled, IBadgeVariant } from "./types/types.styled";

const BadgeVariant: IBadgeVariant = {
	default: {
		backgroundColor: `${variables.grayMedium2}`,
		color: `${variables.white}`,
	},
	primary: {
		backgroundColor: `${variables.primaryColor}`,
		color: `${variables.white}`,
	},
	secondary: {
		backgroundColor: `${variables.secondaryColor}`,
		color: `${variables.black}`,
	},
	danger: {
		backgroundColor: `${variables.red}`,
		color: `${variables.white}`,
	},
	success: {
		backgroundColor: `${variables.success}`,
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