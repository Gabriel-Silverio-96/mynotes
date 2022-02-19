import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;
    
            backgroundPrimary: string;
            backgroundSecundary: string;
    
            textColorTitle: string;
            textColorParagraph: string;
            inputBorder: string;
            buttonBorder: string;
            noteCardBorder: string;
        }
    }
}