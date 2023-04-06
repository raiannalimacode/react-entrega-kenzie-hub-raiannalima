import styled from 'styled-components'

export const StylezedContainerDashboard = styled.div`
    .perfil-container {
        padding: 2.8125rem 0;
        border: 1px solid var(--color-grey-02);
    }

    .perfil-container > div {
        display: flex;
        justify-content: space-between;
        padding: 0.8125rem;
    }

    .main-container {
        padding: 0.8125rem;
    }

    .main-container h3 {
        margin: 2.3125rem 0 1.4375rem 0;
    }

    @media (max-width: 500px) {
        .perfil-container > div {
            flex-direction: column;
        }

        .perfil-container h2 {
            margin-bottom: 0.625rem;
        }

        .main-container {
            display: none;
        }
    }
`