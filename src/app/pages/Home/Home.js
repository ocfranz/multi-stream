import React from "react";
import PropTypes from "prop-types";
import { HomeStyled } from "./Home.styles";
import SimpleGrid from "../../components/SimpleGrid";
import LandingHeader from "../../modules/LandingHeader";
import LandingHero from "../../modules/LandingHero";
const Home = (props) => {
  return (
    <HomeStyled>
      <SimpleGrid>
        <LandingHeader />
        <LandingHero />
      </SimpleGrid>
    </HomeStyled>
  );
};

Home.propTypes = {};

export default Home;
