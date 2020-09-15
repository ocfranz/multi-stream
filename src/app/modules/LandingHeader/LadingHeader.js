import React from "react";
import PropTypes from "prop-types";
import { HeaderStyled, NavHeader } from "./LandingHeader.styles";
import Brand from "../../components/Brand";
import Button from "../../components/Button";
const LadingHeader = ({}) => {
  const handleOnOpenClick = () => {
    //window.location.href = "/app";
  };
  return (
    <HeaderStyled>
      <Brand />
      <NavHeader>
        <Button children="Open app" handleOnClick={handleOnOpenClick} />
      </NavHeader>
    </HeaderStyled>
  );
};

LadingHeader.propTypes = {};

export default LadingHeader;
