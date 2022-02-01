import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const FormGroup = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    label {
        color: ${props => props.theme.colors.textColorParagraph};
        margin-bottom: 0.5rem;
    }

    input {
        padding: 0.6rem 0.5rem;
        border: 0.2rem solid ${props => props.theme.colors.inputBorder};
        border-radius: 0.5rem;
        background-color: transparent;
        font-size: 1rem;
        color: ${props => props.theme.colors.textColorParagraph};
        background-color: ${props => props.theme.colors.backgroundPrimary};

        &:focus {
            border-color: ${variables.primaryColor};
            outline: 0;            
        }
    }

    textarea {
        padding: 0.6rem 0.5rem;
        border: 0.2rem solid ${props => props.theme.colors.inputBorder};
        border-radius: 0.5rem;
        background-color: transparent;
        font-size: 1rem;
        color: ${props => props.theme.colors.textColorParagraph};
        background-color: ${props => props.theme.colors.backgroundPrimary};
        resize: vertical;

        &:focus {
            border-color: ${variables.primaryColor};
            outline: 0;            
        }
    }

    span {
        color: ${variables.red};
        margin-left: 0.2rem;
        font-size: 0.8rem;
    }
`