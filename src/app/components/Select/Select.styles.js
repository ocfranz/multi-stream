import styled from "styled-components";

const SelectStyled = styled.div`
  width: 100%;
  position: relative;
`;
const SelectButton = styled.div`
  background-color: #4f386c;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
const SelectList = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  z-index: 99;
  width: 100%;
  background-color: rgb(49, 35, 67);
`;
const SelectItem = styled.div`
  padding: 10px 20px;
`;

export { SelectStyled, SelectButton, SelectList, SelectItem };
