import React from "react";
import PropTypes from "prop-types";
import { ButtonIconStyled } from "./ButtonIcon.styles";
const ButtonIcon = ({ children, onClick, active }) => (
    <ButtonIconStyled onClick={onClick} active={active}>
        {children}
    </ButtonIconStyled>
);

ButtonIcon.propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
};

export default ButtonIcon;
