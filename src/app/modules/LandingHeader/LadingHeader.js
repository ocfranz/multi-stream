import React from "react";
import PropTypes from "prop-types";
import { HeaderStyled, NavHeader } from "./LandingHeader.styles";
import Brand from "../../components/Brand";
const LadingHeader = ({}) => {
  return (
    <HeaderStyled>
      <Brand />
      <NavHeader>buton</NavHeader>
    </HeaderStyled>
  );
};

LadingHeader.propTypes = {};

export default LadingHeader;
