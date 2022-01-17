import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { FormWrapper } from "./types";

export const Header = styled.header`
    padding: 1rem;
    text-align: center;
`

export const FormGenericContainer = styled.section`
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

export const FormContainer = styled.div<FormWrapper>`
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
        margin-bottom: 2rem;   
        
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
    
    @media(max-width: 579px) {
        width: -webkit-fill-available;
        padding: 2rem 1rem;
    } 
`