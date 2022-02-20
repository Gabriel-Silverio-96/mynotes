import { DefaultTheme, ThemeProps } from "styled-components";
import { IButton } from "./types.component";

export interface IButtonStyled extends IButton { }

type IButtonVariantStyled = {
    backgroundColor: string | ((props: ThemeProps<DefaultTheme>) => string);
    backgroundColorHover: string | ((props: ThemeProps<DefaultTheme>) => string);
    color: string | ((props: ThemeProps<DefaultTheme>) => string);
    colorHover: string | ((props: ThemeProps<DefaultTheme>) => string);
    border: string | ((props: ThemeProps<DefaultTheme>) => string);
    borderHover: string | ((props: ThemeProps<DefaultTheme>) => string);
}

export interface IButtonVariantProps {
    default: IButtonVariantStyled;
    primary: IButtonVariantStyled;
    secondary: IButtonVariantStyled;
    text?: IButtonVariantStyled;
    danger?: IButtonVariantStyled;
    success?: IButtonVariantStyled;
}

type IButtonSizeStyled = {
    fontSize: string;
    padding: string;
}

export interface IButtonSizeProps {
    large: IButtonSizeStyled;
    medium: IButtonSizeStyled;
    small: IButtonSizeStyled;
}