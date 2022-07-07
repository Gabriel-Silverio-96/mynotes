import styled, { DefaultTheme, ThemeProps } from "styled-components";
import * as variables from "assets/styles/variables";
import { IButtonStyled, IButtonVariantProps, IButtonSizeProps } from "./types/types.styled";

const ButtonVariant: IButtonVariantProps = {
	default: {
		backgroundColor: `${variables.black}`,
		backgroundColorHover: `${variables.color_primary}`,
		color: `${variables.white}`,
		colorHover: `${variables.white}`,
		border: (props: ThemeProps<DefaultTheme>) => props.theme.colors.buttonBorder,
		borderHover: (props: ThemeProps<DefaultTheme>) => props.theme.colors.backgroundPrimary
	},
	primary: {
		backgroundColor: `${variables.color_primary}`,
		backgroundColorHover: `${variables.black}`,
		color: `${variables.white}`,
		colorHover: `${variables.white}`,
		border: `${variables.color_primary}`,
		borderHover: `${variables.color_neutral_gray_medium}`
	},
	secondary: {
		backgroundColor: "transparent",
		backgroundColorHover: `${variables.color_primary}`,
		color: (props: ThemeProps<DefaultTheme>) => props.theme.colors.textColorTitle,
		colorHover: `${variables.white}`,
		border: (props: ThemeProps<DefaultTheme>) => props.theme.colors.buttonBorder,
		borderHover: (props: ThemeProps<DefaultTheme>) => props.theme.colors.backgroundPrimary
	},
	text: {
		backgroundColor: "transparent",
		backgroundColorHover: "none",
		color: (props: ThemeProps<DefaultTheme>) => props.theme.colors.textColorTitle,
		colorHover: `${variables.color_primary}`,
		border: "transparent",
		borderHover: "transparent"
	},
	danger: {
		backgroundColor: `${variables.color_red_light}`,
		backgroundColorHover: `${variables.color_danger}`,
		color: `${variables.color_danger}`,
		colorHover: `${variables.white}`,
		border: "transparent",
		borderHover: "transparent"
	},
};

const ButtonSize: IButtonSizeProps = {
	large: {
		fontSize: "1rem",
		padding: "1rem 1.2rem",
	},
	medium: {
		fontSize:"0.9rem",
		padding: "0.65rem 0.8rem",
	},
	small: {
		fontSize:"0.7rem",
		padding: "0.5rem 0.75rem",
	},
};

export const Button = styled.button<IButtonStyled>`
    background-color: ${({ variant }) => ButtonVariant[variant!]!.backgroundColor};
    color: ${({ variant }) => ButtonVariant[variant!]!.color};
    border: 0.03rem solid ${({ variant }) => ButtonVariant[variant!]!.border};
    font-size: ${({ size }) => ButtonSize[size!].fontSize};
    padding: ${({ size }) => ButtonSize[size!].padding};
    border-radius: 0.3125rem;
    height: fit-content;
    cursor: pointer;
    transition: 0.3s;

    &:hover:not([disabled]) {
        background-color: ${({ variant }) => ButtonVariant[variant!]!.backgroundColorHover};
        color: ${({ variant }) => ButtonVariant[variant!]!.colorHover};
        border-color: ${({ variant }) => ButtonVariant[variant!]!.borderHover};
    }

    &:disabled {
        background-color: ${props => props.theme.title === "dark" ? "#303030" : variables.color_disabled };
        color: #6e6e6e;
        cursor: not-allowed;
    }
`;

export const IconButton = styled.span`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;