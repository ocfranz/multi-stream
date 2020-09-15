import styled from "styled-components";

const ButtonStyled = styled.button`
  box-shadow: none;
  outline: none;
  padding: ${(props) => {
    if (props.big) return "14px 44px";
    return "10px 30px";
  }};
  font-size: ${(props) => {
    if (props.secondary) return "20px";
    return "17px";
  }};
  line-height: 22px;
  background: ${(props) => {
    if (props.secondary) return "#ffffff";
    return "#4f386c";
  }};
  border-radius: 10px;
  border: none;
  font-weight: ${(props) => {
    if (props.secondary) return "bold";
    return "normal";
  }};
  color: ${(props) => {
    if (props.secondary) return "#3B2A50";
    return "#ffffff";
  }};
  cursor: pointer;
  &focus {
    box-shadow: none;
    outline: none;
  }
`;

export { ButtonStyled };
