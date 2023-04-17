import styled from 'styled-components'

export const StylezedContainerDashboard = styled.div`
    .perfil-container {
        padding: 2.8125rem 0;
        border: 1px solid var(--color-grey-02);
    }

    .perfil-container > div {
        display: flex;
        justify-content: space-between;
        /* padding: 0.8125rem; */
    }

    .main-container {
        padding: 0.8125rem;
        margin-bottom: 1.75rem;
    }

    ul {
        border-radius: var(--border-radius-01);
        background-color: var(--color-grey-02);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.4375rem;
    }

    li {
        background-color: var(--color-grey-01);
        border-radius: var(--border-radius-01);
        padding: 0.8125rem 1.375rem;
        display: flex;
        justify-content: space-between;
    }

    li:hover {
        cursor: pointer;
    }

    .main-container > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.75rem;
    }

    .main-container > div button {
        width: 2.0306rem;
    }

    @media (max-width: 500px) {
        .perfil-container > div {
            flex-direction: column;
            padding: 0.8125rem;
        }

        .perfil-container h2 {
            margin-bottom: 0.625rem;
        }

        /* .main-container {
            display: none;
        } */
    }
`