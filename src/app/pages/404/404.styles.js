import styled from "styled-components";
import { media } from "../../styles/minxins";
const PageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageWrapper = styled.div`
  display: block;
  text-align: center;
  margin: 20px 20px;
`;
const PageImage = styled.img`
  max-width: 100%;
  ${media.md`
  max-width: 500px;`}
`;
const PageMessage = styled.div`
  display: block;
  font-size: 22px;
  padding: 20px 0px;
  opacity: 0.7;
`;

export { PageWrapper, PageMessage, PageImage, PageStyled };
