import React from "react";
import PropTypes from "prop-types";
import { LoadingWrapper, Ring, RingWrapper } from "./Loading.style";
const Loading = ({ message }) => {
  return (
    <LoadingWrapper>
      <RingWrapper>
        <Ring></Ring>
      </RingWrapper>
    </LoadingWrapper>
  );
};
Loading.defaultProps = {
  message: "",
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
