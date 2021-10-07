import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const MessageFormErrorContainer = styled.span`
    background-color: ${variables.redLight};
    color: ${variables.red};
    padding: 1rem;
    width: initial;
    display: block;
    border-radius: 0.5rem;

    &:empty {
        display: none;
    }
`