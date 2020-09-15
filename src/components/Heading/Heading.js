import React from "react";
import { HeadingStyled } from "./Heading.styles";
import PropTypes from "prop-types";
const Heading = ({ children }) => {
    return <HeadingStyled>{children}</HeadingStyled>;
};

Heading.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Heading;
