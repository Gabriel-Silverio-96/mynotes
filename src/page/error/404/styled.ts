import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const Page404Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 1rem;

    h1 {
        color: ${props => props.theme.colors.textColorTitle};
        font-size: 5rem;
    }

    p {
        color: ${variables.textColorParagraph};
    }

`;