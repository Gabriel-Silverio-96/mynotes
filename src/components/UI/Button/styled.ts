import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const ButtonPrimaryContainer = styled.button `
    background-color: ${variables.black};
    color: ${variables.white};
    border: 0.03rem solid ${variables.white};
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${variables.primaryColor};                
    }
`

export const ButtonRoundContainer = styled.button`
    background-color: ${variables.grayLight};
    border: 0;
    padding: 0.65rem;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${variables.yellowLight};
    }
`