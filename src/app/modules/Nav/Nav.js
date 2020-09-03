import React from "react";
import { NavStyled, NavWrapper, NavHeading } from "./Nav.styles";
import Avatar from "../../components/Atavar";
const Sidebar = () => {
    return (
        <NavStyled>
            <NavWrapper>
                <NavHeading>
                    <Avatar />
                </NavHeading>
            </NavWrapper>
        </NavStyled>
    );
};
export default Sidebar;
