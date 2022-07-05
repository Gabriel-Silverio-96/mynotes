import { createGlobalStyle } from "styled-components";
import * as variables from "./variables";
import MynotesFont from "../fonts/mynotes-font.woff";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        box-sizing: border-box;
        background-color: ${props => props.theme.colors.backgroundPrimary};
        font-family: 'Inter', sans-serif;
        padding: 0 1rem;
    }

    button, h1, h2, h3, h4, h5, h6, textarea, input {
        font-family: 'Inter', sans-serif;
    }

    [id*="describe-"] {
        display: none;
    }

    :focus-visible {
        outline: 0.3rem solid ${variables.color_danger};
        outline-style: dotted;
    }

    input, textarea, select {
        &:disabled {
            background-color: ${props => props.theme.title === "dark" ? "#303030" : variables.disabledColor } !important;
            cursor: not-allowed;
        }
    }

	button {
		&:disabled: {
			cursor: not-allowed;
		}
	}

    a {
        cursor: pointer;
    }

	@font-face {
		font-family: mynotes;
		src: url(${MynotesFont});
	}
`;