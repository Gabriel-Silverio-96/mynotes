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

    a {
        margin-top: 2rem;
        text-decoration: none;
        color: ${variables.textColorParagraph};
        transition: .3s;

        &:hover {
            color: ${variables.primaryColor};
        }

    }

    @media(max-width: 767px) {
        align-items: baseline;
        height: 100%;
    } 
`

export const FormContainer = styled.div<FormWrapper>`
    width: ${props => props.widthModal};
    padding: 3rem;
    border-radius: 0.8rem;
    background-color: ${variables.grayDark};

    h1 {
        color: ${variables.white};
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }

    form {
        button {
            margin-top: 2rem;
            width: 100%;
        }

        div {
            &:last-child {
                margin-top: 2rem;
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