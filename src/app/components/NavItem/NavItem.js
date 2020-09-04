import React from "react";
import { NavItemStyled } from "./NavItem.styles";
const NavItem = ({ children, onClick }) => {
    return <NavItemStyled onClick={onClick}>{children}</NavItemStyled>;
};
export default NavItem;
