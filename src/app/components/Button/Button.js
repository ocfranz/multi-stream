import React, { Children } from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styles";
const Button = ({ children, handleOnClick, big, secondary }) => {
  return (
    <ButtonStyled onClick={handleOnClick} big={big} secondary={secondary}>
      {Children.toArray(children)}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  big: false,
  secondary: false,
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  handleOnClick: PropTypes.func.isRequired,
  big: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
