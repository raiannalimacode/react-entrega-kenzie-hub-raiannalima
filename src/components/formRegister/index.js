import styled from 'styled-components'

export const StylizedFormRegister = styled.form`
    width: 26.125rem;
    min-height: 55.6994rem;

    fieldset {
        width: 100%;
        height: 100%;
        background-color: var(--color-grey-02);
        display: flex;
        flex-direction: column;
        padding: 2.625rem 1.375rem;
        margin: 0;
        border-radius: var(--border-radius-01);
        border: none;
        min-inline-size: inherit;
    }

    fieldset h2,p {
        margin-bottom: 1.375rem;
        text-align: center;
    }

    label, input, select {
        margin-bottom: 1rem;
    }

    input, select {
        height: 3rem;
        background-color: var(--color-grey-03);
        border-radius: var(--border-radius-01);
        border: none;
        color: var(--color-grey-04);
        font-size: var(--font-size-03);
        font-weight: var(--font-weight-01);
        padding-left: 1rem;
    }    

    span {
        margin-bottom: 1rem;
    }

    @media (max-width: 500px) {
        width: 18.4894rem;
        margin-bottom: 2.4813rem;
    }
`