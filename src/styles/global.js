import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: var(--font-family-01);
    }

    body {
        background-color: var(--color-grey-01);
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    ul, ol {
        list-style: none;
    }

    :root {
        --color-primary-01: #FF577F;
        --color-primary-01-focus: #FF427F;
        --color-primary-01-negative: #59323F;
        --color-grey-01: #121214;
        --color-grey-02: #212529;
        --color-grey-03: #343B41;
        --color-grey-04: #868E96;
        --color-grey-05: #F8F9FA;
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;
        --color-white: #FFFFFF;
        --color-grey-01-shadow-01: rgba(18, 18, 20, 0.5);

        --font-family-01: 'Inter', sans-serif;

        --font-size-01: 2rem; /* 32px */
        --font-size-02: 1.125rem; /* 18px */
        --font-size-03: 1rem; /* 16px*/
        --font-size-04: 0.7612rem; /* 12.18px */
        --font-size-05: 0.75rem; /* 12px */
        --font-size-06: 0.8881rem; /* 14.21px */
        --font-size-07: 0.7612rem; /* 12.18px */
        --font-size-08: 0.875rem; /* 14px */
        --font-size-09: 1.015rem; /* 16.24px */

        --font-weight-01: 400;
        --font-weight-02: 500;
        --font-weight-03: 600;
        --font-weight-04: 700;

        --line-height-01: 150%;

        --border-radius-01: 4px;
    }

    .title-01 {
        color: var(--color-primary-01);
        font-size: var(--font-size-01);
        font-weight: var(--font-weight-03);
        line-height: var(--line-height-01);
    }

    .title-02 {
        color: var(--color-grey-05);
        font-size: var(--font-size-02);
        font-weight: var(--font-weight-04); 
        line-height: var(--line-height-01);
    }

    .title-03 {
        color: var(--color-white);
        font-size: var(--font-size-06);
        font-weight: var(--font-weight-04);
        line-height: var(--line-height-01);
    }

    .title-04 {
        color: var(--color-grey-05);
        font-size: var(--font-size-08);
        font-weight: var(--font-weight-04);
        line-height: var(--line-height-01);
    }

    .text-01 {
        color: var(--color-grey-05);
        font-size: var(--font-size-04);
        font-weight: var(--font-weight-01); 
        line-height: var(--line-height-01);
    }

    .text-02 {
        color: var(--color-grey-04);
        font-size: var(--font-size-05);
        font-weight: var(--font-weight-03); 
        line-height: var(--line-height-01);
    }

    .text-03 {
        color: var(--color-grey-04);
        font-size: var(--font-size-05);
        font-weight: var(--font-weight-01); 
        line-height: var(--line-height-01);
    }

    .text-04 {
        color: var(--color-white);
        font-size: var(--font-size-03);
        font-weight: var(--font-weight-01);
        line-height: var(--line-height-01);
    }

    .text-05 {
        color: var(--color-negative);
        font-size: var(--font-size-04);
        font-weight: var(--font-weight-01); 
        line-height: var(--line-height-01);
    }

    .text-06 {
        color: var(--color-grey-04);
        font-size: var(--font-size-07);
        font-weight: var(--font-weight-01);
        line-height: var(--line-height-01);
    }

    .text-06 {
        color: var(--color-grey-05);
        font-size: var(--font-size-07);
        font-weight: var(--font-weight-01);
        line-height: var(--line-height-01);
    }

    .button-01 {
        height: 3rem;
        background-color: var(--color-primary-01);
        color: var(--color-white);
        font-weight: var(--font-weight-02);
        font-size: var(--font-size-03);
        border-radius: var(--border-radius-01);
    }

    .button-01:hover {
        background-color: var(--color-primary-01-focus);
    }

    .button-02 {
        height: 3rem;
        background-color: var(--color-grey-04);
        color: var(--color-white);
        font-weight: var(--font-weight-02);
        font-size: var(--font-size-03);
        border-radius: var(--border-radius-01);
    }

    .button-03 {
        height: 2.5069rem;
        background-color: var(--color-grey-02);
        color: var(--color-grey-05);
        font-size: var(--font-size-05);
        font-weight: var(--font-weight-03);
        border-radius: var(--border-radius-01);
    }

    .button-04 {
        height: 3rem;
        background-color: var(--color-primary-01-negative);
        color: var(--color-white);
        font-weight: var(--font-weight-02);
        font-size: var(--font-size-03);
        border-radius: var(--border-radius-01);
    }

    .button-05 {
        height: 3rem;
        background-color: var(--color-primary-01);
        color: var(--color-white);
        font-weight: var(--font-weight-02);
        font-size: var(--font-size-03);
        border-radius: var(--border-radius-01);
    }

    .button-05:hover {
        background-color: var(--color-primary-01-focus);
    }

    .button-06 {
        height: 3rem;
        background-color: var(--color-primary-01-negative);
        color: var(--color-white);
        font-weight: var(--font-weight-02);
        font-size: var(--font-size-03);
        border-radius: var(--border-radius-01);
    }

    .button-07 {
        height: 3rem;
        background-color: var(--color-grey-04);
        color: var(--color-white);
        font-weight: var(--font-weight-02);
        font-size: var(--font-size-03);
        border-radius: var(--border-radius-01);
    }

    .button-07:hover {
        background-color: var(--color-grey-03);
    }

    .container {
        margin: 0 auto;
        max-width: 60rem;
    }
`