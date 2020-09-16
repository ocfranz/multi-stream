import React from "react";
import { PageWrapper, PageMessage, PageImage, PageStyled } from "./404.styles";
import _404Image from "../../../../assets/images/404.png";
import Button from "../../components/Button";
const Page404 = (props) => {
  const handleOnAppClick = () => {
    window.location.href = "/app";
  };
  return (
    <PageStyled>
      <PageWrapper>
        <PageImage src={_404Image} alt="404 images" />
        <PageMessage>
          We can't seem to find the page that you're looking for
        </PageMessage>
        <Button
          children="Go to app"
          big={true}
          secondary={true}
          handleOnClick={handleOnAppClick}
        />
      </PageWrapper>
    </PageStyled>
  );
};

export default Page404;
