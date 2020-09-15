import styled from "styled-components";

const LandingHeroStyled = styled.div`
  display: flex;
`;

const HeroMessage = styled.span`
  font-weight: bold;
  font-size: 45px;
  line-height: 59px;
  display: block;
  margin-bottom: 35px;
  &::after {
    content: " place";
    color: #db4655;
  }
`;

export { LandingHeroStyled, HeroMessage };
