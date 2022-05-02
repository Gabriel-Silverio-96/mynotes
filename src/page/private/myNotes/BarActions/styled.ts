import styled from "styled-components";

export const BarActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    h2 {
        color: ${props => props.theme.colors.textColorTitle};
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;