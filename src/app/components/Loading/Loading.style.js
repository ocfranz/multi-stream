import styled, { keyframes } from "styled-components";

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #3b2a50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RingWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
const RingKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Ring = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 8px;
  border: 5px solid #fff;
  border-radius: 50%;
  animation-name: ${RingKeyframes};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
  border-color: #fff transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export { LoadingWrapper, Ring, RingWrapper };
