import styled from "styled-components";

export const DialogTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    button {
        &:last-child {
            padding-right: 0;
        }
    }

    h2 {
        color: ${props => props.theme.colors.textColorTitle};
    }
`

export const DialogTitleContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`