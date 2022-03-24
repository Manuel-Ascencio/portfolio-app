import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Red Hat Display', sans-serif;
        font-size: 1.1rem;
    }
    a{
        font-family: inherit;
        color: var(--cyan-blue);
        font-size: inherit;
    }
`;

export default GlobalStyle;
