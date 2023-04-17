import styled from "styled-components";

export const StylizedModalHeader = styled.div`
    height: 3.125rem;
    background-color: var(--color-grey-03);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.25rem;

    button {
        color: var(--color-grey-04);
        font-family: 'Nunito', sans-serif;
        font-size: var(--font-size-03);
        font-weight: var(--font-weight-03);
    }
`