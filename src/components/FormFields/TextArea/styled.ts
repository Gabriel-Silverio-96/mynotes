import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const TextAreaGroup = styled.div`
    display: flex;
    flex-direction: column;

    label {
        color: ${props => props.theme.colors.textColorParagraph};
        margin-bottom: 0.5rem;
    }

    span {
        color: ${variables.red};
        margin-left: 0.2rem;
        font-size: 0.8rem;
    }
`

export const TextAreaElement = styled.div`    
    position: relative;

    .loading-input {
        position: absolute;
        top: 0.6rem;
        left: 0.8rem;
    }

    textarea {        
        width: intrinsic;
        width: -webkit-fill-available;
        width: -moz-available;
        padding: 0.6rem 0.5rem;
        border: 0.2rem solid ${props => props.theme.colors.inputBorder};
        border-radius: 0.5rem;
        font-size: 1rem;
        color: ${props => props.theme.colors.textColorParagraph};
        background-color: ${props => props.theme.colors.backgroundPrimary};
        
        &:focus {
            border-color: ${variables.primaryColor};
            outline: 0;            
        }
    }
`