import React from "react";
import PropTypes from "prop-types";

import {
  LoginContainer,
  LoginFormWrapper,
  LoginImageWrapper,
  LoginImage,
  LoginFrom,
} from "./Login.styles";
import Brand from "../../components/Brand";
import Input from "../../components/Input";

const Login = (props) => {
  return (
    <LoginContainer>
      <LoginFormWrapper>
        <Brand />
        <LoginFrom>
          <Input placeholder="Username" />
          <Input type="password" placeholder="Password" />
        </LoginFrom>
      </LoginFormWrapper>

      <LoginImageWrapper>
        <LoginImage
          src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=pexels-lucie-liz-3165335.jpg&fm=jpg"
          alt="Login image"
        />
      </LoginImageWrapper>
    </LoginContainer>
  );
};

Login.propTypes = {};

export default Login;
