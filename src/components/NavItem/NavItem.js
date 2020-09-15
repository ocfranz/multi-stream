import React from "react";
import PropTypes from "prop-types";
import { NavItemStyled } from "./NavItem.styles";
const NavItem = ({ children, onClick }) => {
    return <NavItemStyled onClick={onClick}>{children}</NavItemStyled>;
};

NavItem.propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default NavItem;
