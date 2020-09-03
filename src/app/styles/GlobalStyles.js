import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body, html{
        border : 0;
        margin :0;
        padding: 0;
    }

    body{
        height: 100%;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        -webkit-transition: background-color 0.5s linear;
        -moz-transition:  background-color 0.5s linear;
        -o-transition: background-color 0.5s linear;
        transition:  background-color 0.5s linear;
    }
    
    *{
        font-family: 'DM Sans', sans-serif;
    }
    [contenteditable][placeholder]:empty:before {
        content: attr(placeholder);
        position: absolute;
        color: ${({ theme }) => theme.contentEditable};
        background-color: transparent;
    }
`
export default GlobalStyles;
