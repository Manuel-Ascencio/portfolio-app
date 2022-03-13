import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --background-main: #0a192f;
        --white-color: #FFF;
        --dodger-blue: #00BFFF	;
        --cyan-blue: #92abcf;
        --nav-background: RGB(5.88, 9.02, 14.2, 0.5);
        --light-white: #ccd6f6;
    }

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
    }s
`;

export default GlobalStyle;
