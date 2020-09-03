import React from "react";
import { render } from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
render(
    <>
        <React.StrictMode>
            <GlobalStyles />
            <App />
        </React.StrictMode>
    </>,
    document.getElementById("app")
);
