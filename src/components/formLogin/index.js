import styled from 'styled-components'

export const StylizedForm = styled.form`
    width: 23.0625rem;
    height: 31.375rem;

    fieldset {
        background-color: var(--color-grey-02);
        width: 100%;
        height: 100%;
        border: none;
        display: flex;
        flex-direction: column;
        padding: 2.625rem 1.375rem;
        margin: 0;
        border-radius: var(--border-radius-01);
    }

    h2 {
        align-self: center;
        margin-bottom: 1.75rem;
    }

    label, input {
        margin-bottom: 1.3956rem;
    }

    input {
        height: 3rem;
        background-color: var(--color-grey-03);
        border: 1.22px solid var(--color-grey-05);
        border-radius: var(--border-radius-01);
    }

    /* input:last-of-type {
        background: url(../../assets/eye2.svg);
    } */

    button:first-of-type {
        margin-bottom: 2.125rem;
    }

    p {
        align-self: center;
        margin-bottom: 2.125rem;
    }

    @media (max-width: 500px) {
        width: 18.5rem;
        margin-bottom: 3.125rem;
    }
`
