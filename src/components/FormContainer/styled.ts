import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { IFormContentStyled } from "./types/types.styled";

export const Header = styled.header`
    padding: 1rem;
    text-align: center;
`

export const FormContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    padding: 0.3rem;
    margin-top: 2rem;
    
    header {
        padding: 1rem 0;
        text-align: center;
    }  

    @media(max-width: 767px) {
        align-items: baseline;
        height: 100%;
    } 
    
    button {
        margin-top: 1rem;
    }
`

export const BackPage = styled.div`
    margin-top: 2rem;
    text-decoration: none;
    color: ${variables.textColorParagraph};
    transition: .3s;
    cursor: pointer;

    &:hover {
        color: ${variables.primaryColor};
    }
`

export const FormContent = styled.div<IFormContentStyled>`
    width: ${props => props.widthModal};
    padding: 3rem;
    border-radius: 0.8rem;
    background-color: ${props => props.theme.colors.backgroundSecundary};   
    border: 0.2rem solid ${props => props.theme.colors.inputBorder};

    h1 {
        color: ${props => props.theme.colors.textColorTitle};
        font-size: 2.5rem;    
        margin-bottom: 0.5rem;    
    }
    
    p {
        color: ${props => props.theme.colors.textColorParagraph};
        
        strong {
            color: ${variables.primaryColor}
        }
    }

    form {
        margin-top: 3rem;        
        button {
            margin-top: 2rem;
            width: 100%;

            p {
                margin-bottom: 0;
            }
        }

        div {
            &:last-child {
                text-align: center;
                a {
                    text-decoration: none;
                    color: ${variables.textColorParagraph};
                    transition: .3s;

                    &:hover {
                        color: ${variables.primaryColor};
                    }

                }
            }
        }
    }
    
    @media(max-width: 767px) {
        width: -webkit-fill-available;
        width: -moz-available;
        width: intrinsic;
        padding: 2rem 1rem;
    } 
`