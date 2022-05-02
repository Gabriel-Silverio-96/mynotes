import styled from "styled-components";

export const NoteList = styled.section`
    display: grid;  
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    padding-bottom: 1rem;
    
    @media (min-width: 1920px) {
        grid-template-columns: repeat(8, 1fr) !important;
    }

    @media (min-width: 1400px) {
        grid-template-columns: repeat(6, 1fr);
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const LoadingWrapper = styled.div`
    margin: 1rem 0;
`;