import styled from "styled-components";
import { media } from "../../styles/minxins";
const LandingHeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`
  flex-direction: row;
  `}
`;

const HeroMessage = styled.span`
  font-weight: bold;
  font-size: 35px;
  line-height: 45px;
  display: block;
  margin-bottom: 35px;
  text-align: center;
  &::after {
    content: " place";
    color: #db4655;
  }
  ${media.md`
    text-align: left ;
    font-size: 45px;
  line-height: 59px;
  `}
  ${media.lg`
  max-width: 492px;`}
`;

const HeroCallAction = styled.div`
  margin-top: 100px;
  text-align: center;
  padding-bottom: 50px;
  width: 100%;
  ${media.md`
    margin-top: 170px;
    text-align: left;
    padding-bottom: 0px;
    width: 50%;
    `}
`;
const HeroImageWrapper = styled.div`
  width: 100%;
  ${media.md`
    width: 50%;
    position : relative;
    `}
`;

const HeroImage = styled.img`
  width: 100%;
  ${media.md`
    width: 110%;
    position: absolute;
    top: 20%;
    `}
`;

export {
  LandingHeroStyled,
  HeroMessage,
  HeroImage,
  HeroCallAction,
  HeroImageWrapper,
};
