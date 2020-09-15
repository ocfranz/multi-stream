import styled from "styled-components";

const ButtonStyled = styled.button`
  box-shadow: none;
  outline: none;
  padding: 10px 30px;
  font-size: 17px;
  line-height: 22px;
  background: #4f386c;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  &focus {
    box-shadow: none;
    outline: none;
  }
`;

export { ButtonStyled };
