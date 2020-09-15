import React from "react";
import { render } from "react-dom";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
render(
    <>
        <React.StrictMode>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
                />
                <script src="https://embed.twitch.tv/embed/v1.js"></script>
            </Helmet>
            <Provider store={store}>
                <GlobalStyles />
                <App />
            </Provider>
        </React.StrictMode>
    </>,
    document.getElementById("app")
);
