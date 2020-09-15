import React from "react";
import { LandingHeroStyled } from "./LandingHero.styles";
import Button from "../../components/Button";
import HeroImage from "./hero_image.png";
const LandingHero = (props) => {
  return (
    <LandingHeroStyled>
      <div>
        <span>Watch all your favorite streams from just a place</span>
        <Button children="Try now" handleOnClick={() => {}} />
      </div>
      <div>
        <img src={HeroImage} alt="Hero image owl stream" />
      </div>
    </LandingHeroStyled>
  );
};

export default LandingHero;
