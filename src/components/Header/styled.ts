import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.colors.backgroundPrimary};
    padding: 1.5625rem 0;
    display: flex;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 1rem;
    }
`