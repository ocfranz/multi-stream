import React from "react";
import PropTypes from "prop-types";
import { GridStyled } from "./SimpleGrid.styles";
const SimpleGrid = ({ children }) => {
  return <GridStyled>{children}</GridStyled>;
};

SimpleGrid.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SimpleGrid;
