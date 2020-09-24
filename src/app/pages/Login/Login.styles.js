import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;

const LoginFormWrapper = styled.div`
  width: 40%;
  text-align: center;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
`;

const LoginFrom = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const LoginImageWrapper = styled.div`
  width: 60%;
`;

const LoginImage = styled.img`
  width: 100%;
  height: 100%;
`;
export {
  LoginContainer,
  LoginFormWrapper,
  LoginImage,
  LoginImageWrapper,
  LoginFrom,
};
