import React from "react";
import { BrandStyled, LogoStyled, NameStyled } from "./Brand.styles";
import Logo from "../../../../assets/images/logo.png";
const Brand = () => {
  return (
    <BrandStyled>
      <LogoStyled src={Logo} />
      <NameStyled>Owl stream</NameStyled>
    </BrandStyled>
  );
};

export default Brand;
