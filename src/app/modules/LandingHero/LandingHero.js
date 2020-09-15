import React from "react";
import { LandingHeroStyled, HeroMessage } from "./LandingHero.styles";
import Button from "../../components/Button";
import HeroImage from "./hero_image.png";
const LandingHero = (props) => {
  return (
    <LandingHeroStyled>
      <div style={{ marginTop: "200px" }}>
        <HeroMessage>Watch all your favorite streams from just a</HeroMessage>
        <Button
          children="Try now"
          handleOnClick={() => {}}
          big={true}
          secondary={true}
        />
      </div>
      <div>
        <img src={HeroImage} alt="Hero image owl stream" />
      </div>
    </LandingHeroStyled>
  );
};

export default LandingHero;
