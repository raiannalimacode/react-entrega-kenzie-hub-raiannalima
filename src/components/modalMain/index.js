import styled from "styled-components";

export const StylizedForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 1.5rem 1.375rem;

    label {
        margin-bottom: 1.3956rem;
    }

    input, select {
        height: 3rem;
        background-color: var(--color-grey-03);
        border: none;
        padding: 0.6563rem 1.015rem;
        color: var(--color-grey-04);
        font-size: var(--font-size-09);
        font-weight: var(--font-weight-01);
    }

    input {
        margin-bottom: 1.6669rem;
    }

    select {
        margin-bottom: 1.2631rem;
    }

    button {
        width: 100%;
    }

    span {
        margin-bottom: 1.3956rem;
    }
`