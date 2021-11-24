import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const ModalWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${variables.blackLight};  
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

export const ModalContainer = styled.div`
    width: 35rem;
    min-height: 15rem;
    padding: 1.5rem;
    background-color: ${props => props.theme.colors.backgroundSecundary};   
    border-radius: 1rem; 
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2 {
        color: ${props => props.theme.colors.textColorTitle};
    }

   button {
       svg {
            transform: scale(1.3);
       }
   }

`

export const ModalBody = styled.div`

`

export const FormGroupColorContainer = styled.div`
    margin-top: 1.5rem;
    position: relative;
    width: 30%;
    display: none;
`

export const FormGroupColor = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    input[type="color"] {
        background-color: transparent;
        border: 0;
        width: 2rem;
        
        &::-webkit-color-swatch-wrapper {
            padding: 0;
            width: 1.8rem;
        }
        &::-webkit-color-swatch {
            height: 1.3rem;
            border-radius: 50%;
            border: 0.2rem solid ${variables.grayMedium};
        }
    }

    label {
        cursor: pointer;
        color: ${props => props.theme.colors.textColorParagraph};
    }

`

export const FormGroup = styled.div`
    margin-top: 2rem;
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

export const ModalFooter = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-size: 1rem;
    }
`