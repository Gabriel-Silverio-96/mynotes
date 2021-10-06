import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { MainProps } from "./types";

export const Main = styled.main<MainProps>`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    position: relative;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1 {
        color: ${variables.white};
        font-size: 4.6875rem;
    }
    
    p {
        margin-top: 1rem;
        color: ${variables.white};
    }
    
    div {
        margin-top: 1rem;
        
        button {
            background-color: ${variables.primaryColor};
            border: 0;
        }
    }   
`