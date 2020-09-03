import React from "react";
import { render } from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { Helmet } from "react-helmet";
render(
    <>
        <React.StrictMode>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
                />
            </Helmet>
            <GlobalStyles />
            <App />
        </React.StrictMode>
    </>,
    document.getElementById("app")
);
