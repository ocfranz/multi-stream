import React from "react";
import {
  LandingHeroStyled,
  HeroMessage,
  HeroImage,
  HeroCallAction,
  HeroImageWrapper,
} from "./LandingHero.styles";
import Button from "../../components/Button";
import Image from "../../../../assets/images/hero_image.png";
const LandingHero = (props) => {
  const handleOnClickTryNow = () => {
    window.location.href = "/app";
  };
  return (
    <LandingHeroStyled>
      <HeroCallAction>
        <HeroMessage>Watch all your favorite streams from just a</HeroMessage>
        <Button
          children="Try now"
          handleOnClick={handleOnClickTryNow}
          big={true}
          secondary={true}
        />
      </HeroCallAction>
      <HeroImageWrapper>
        <HeroImage src={Image} alt="Hero image owl stream" />
      </HeroImageWrapper>
    </LandingHeroStyled>
  );
};

export default LandingHero;
