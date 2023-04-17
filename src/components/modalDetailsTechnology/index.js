import styled from "styled-components";

export const StylizedDetailsRegister = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-01-shadow-01);
    z-index: 150;

    .modal-container {
        width: 23.0625rem;
        height: 24.375rem;
        display: flex;
        flex-direction: column;
        background-color: var(--color-grey-02);
    }
`