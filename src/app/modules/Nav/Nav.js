import React from "react";
import {
    NavStyled,
    NavWrapper,
    NavHeading,
    NavItemsWrapper,
} from "./Nav.styles";
import Avatar from "../../components/Atavar";
import NavItem from "../../components/NavItem";

import AddIcon from "./AddIcon";
import SettingIcon from "./SettingIcon";
const Sidebar = () => {
    return (
        <NavStyled>
            <NavWrapper>
                <NavHeading>
                    <Avatar />
                </NavHeading>
                <NavItemsWrapper>
                    <NavItem children={<AddIcon color="#dbdbdb" />} />
                    <NavItem children={<SettingIcon color="#dbdbdb" />} />
                </NavItemsWrapper>
            </NavWrapper>
        </NavStyled>
    );
};
export default Sidebar;
