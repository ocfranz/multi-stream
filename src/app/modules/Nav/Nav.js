import React from "react";
import {
    NavStyled,
    NavWrapper,
    NavHeading,
    NavItemsWrapper,
} from "./Nav.styles";
import Avatar from "../../components/Atavar";
import NavItem from "../../components/NavItem";
const Sidebar = () => {
    return (
        <NavStyled>
            <NavWrapper>
                <NavHeading>
                    <Avatar />
                </NavHeading>
                <NavItemsWrapper>
                    <NavItem />

                </NavItemsWrapper>
            </NavWrapper>
        </NavStyled>
    );
};
export default Sidebar;
