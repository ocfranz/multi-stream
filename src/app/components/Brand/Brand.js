import React from "react";
import { BrandStyled, LogoStyled, NameStyled } from "./Brand.styles";
import Logo from "../../../../assets/images/logo-big.png";
const Brand = () => {
  return (
    <BrandStyled>
      <LogoStyled src={Logo} alt="owl stream logo" />
      <NameStyled>Owl stream</NameStyled>
    </BrandStyled>
  );
};

export default Brand;
