import styled from "styled-components";

export const NoNotesCreated = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / -1;
`

export const NoNotesCreatedContent = styled.div`
    text-align: center;

    span {
        font-size: 3rem;
    }

    h1 {
        font-size: 2.625rem;
        font-weight: 800;               
        margin: 1rem 0;
        color: ${props => props.theme.colors.textColorTitle};
        width: auto;
        max-width: 22rem;
    }

    p {
        color: ${props => props.theme.colors.textColorParagraph};
    }
`