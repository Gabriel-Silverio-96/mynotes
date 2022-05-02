import { DefaultTheme, ThemeProps } from "styled-components";
import { IBadge } from "./types.component";

export type IBadgeStyled = Omit<IBadge, "text">

type BadgeVariantStyled = {
    backgroundColor: string;
    color: string | ((props: ThemeProps<DefaultTheme>) => string); 
}

export interface IBadgeVariant {
    default: BadgeVariantStyled;
    primary: BadgeVariantStyled;
    secondary: BadgeVariantStyled;
    success: BadgeVariantStyled;
    danger: BadgeVariantStyled;
    text: BadgeVariantStyled;
}