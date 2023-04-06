import styled from 'styled-components'

export const StylezedContainerRegister = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-01);

    .register-nav {
        width: 26.125rem;
        display: flex;
        justify-content: space-between;
        margin: 2.4813rem 0;
    }

    @media (max-width: 500px) {
        .register-nav {
            width: 18.4894rem;
        }
    }
`    