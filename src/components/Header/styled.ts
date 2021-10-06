import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.colors.backgroundPrimary};
    padding: 1.5625rem 0;
    display: flex;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 1rem;

        a {
            text-decoration: none;
            display: contents;
        }
        
        button {
            cursor: pointer;
            &:nth-child(2n) {
                svg {
                    transform: scale(1.5);
                }
            }
        }
    }
`