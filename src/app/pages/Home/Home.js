import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { media } from "../../styles/minxins";
import { lightTheme, darkTheme } from "../../styles/themes";
import GlobalStyles from "../../styles/GlobalStyles";

const HomeStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const Home = ({}) => {
    const [theme, setTheme] = useState("light");

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <Helmet>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
                    />
                </Helmet>
                <GlobalStyles />
            </>
        </ThemeProvider>
    );
};

export default Home;
