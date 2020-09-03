import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body, html{
        border : 0;
        margin :0;
        padding: 0;
    }

    body{
        height: 100%;
        background-color : #3B2A50;
        color : #FFFFFF;
        -webkit-transition: background-color 0.5s linear;
        -moz-transition:  background-color 0.5s linear;
        -o-transition: background-color 0.5s linear;
        transition:  background-color 0.5s linear;
    }
    
    *{
        font-family: 'DM Sans', sans-serif;
    }
`;
export default GlobalStyles;
