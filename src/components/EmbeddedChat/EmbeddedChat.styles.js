import styled from "styled-components";
const EmbeddedChatStyled = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  height: 100%;
`;

export { EmbeddedChatStyled };
