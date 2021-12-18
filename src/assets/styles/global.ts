import { createGlobalStyle } from "styled-components";
import * as variables from "./variables";

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
        outline: 0.3rem solid red;
        outline-style: dotted;
    }

    input {
        &:disabled {
            background-color: ${props => props.theme.title === "dark" ? "#303030" : variables.disabledColor };
            cursor: not-allowed;
        }
    }

    a {
        cursor: pointer;
    }
`