import React from "react";
import PropTypes from "prop-types";
import { ButtonIconStyled } from "./ButtonIcon.styles";
const ButtonIcon = ({ children, onClick, active }) => (
    <ButtonIconStyled onClick={onClick} active={active}>{children}</ButtonIconStyled>
);

ButtonIcon.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func,
    active : PropTypes.bool
};

export default ButtonIcon;
