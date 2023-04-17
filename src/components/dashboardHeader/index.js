import styled from 'styled-components'

export const StylizedHeader = styled.header`
    width: 100%;
    height: 4.5rem;
    background-color: var(--color-grey-01);
    border-bottom: 1px solid var(--color-grey-02);
    padding: 0.8125rem;

    div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-btn-turn_off {
        width: 4.2181rem;
    }
`