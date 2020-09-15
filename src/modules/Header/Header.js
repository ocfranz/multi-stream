import React from "react";
import { HeaderStyled, HeaderWrapper } from "./Header.styles";
import Brand from "../../components/Brand";
import Grid from "../../components/Grid";
const Header = () => {
    return (
        <HeaderStyled>
            <Grid
                children={
                    <HeaderWrapper>
                        <Brand />
                    </HeaderWrapper>
                }
            />
        </HeaderStyled>
    );
};

export default Header;
