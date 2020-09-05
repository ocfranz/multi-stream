import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body, html{
        margin :0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }

    body{
        background-color : #3B2A50;
        color : #FFFFFF;
    }

    *{
        font-family: 'DM Sans', sans-serif;
    } 
    ::placeholder { 
        color: #ffffff;
        opacity: 0.6; 
      }
      
      :-ms-input-placeholder { 
        color: #ffffff;
      }
      
      ::-ms-input-placeholder { 
        color: #ffffff;
      }
      
`;
export default GlobalStyles;
/**
 



 */
