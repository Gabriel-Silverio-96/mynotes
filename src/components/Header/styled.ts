import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: transparent;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
		z-index: 1;
    }

    nav {
        display: flex;
        gap: 1rem;

        a {
            text-decoration: none;
            display: contents;
        }

        button {
            cursor: pointer;
        }
    }

    @media (max-width: 450px) {
        nav {
            gap: 0.5rem;
        }
    }
`;