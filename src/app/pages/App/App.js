import React from "react";
import { useSelector } from "react-redux";

import {
  PageWrapper,
  HomeStyled,
  HomeWrapper,
  HomeVideoBig,
} from "./App.styles";
import { PageContent } from "../../components/Page/Page.styles";
import Grid from "../../components/Grid";
import VideoPlayer from "../../components/VideoPlayer";
import EmptyDisplay from "../../components/EmptyDisplay";
import Header from "../../modules/Header";
import Nav from "../../modules/Nav";
import ControlModal from "../../modules/ControlModal";
import ChatModal from "../../modules/ChatModal";
const Home = ({}) => {
  const streams = useSelector((state) => state.streamReducer.streams);
  const visibleModalControl = useSelector((state) => state.uiReducer.showModal);
  const visibleChatModal = useSelector(
    (state) => state.uiReducer.showChatModal
  );
  const drawStreams = (list) => {
    const liveStream = list
      .filter((item) => item.is_live)
      .filter((item) => !item.is_hidden);
    let width = 0;
    let height = 0;
    switch (liveStream.length) {
      case 1:
        width = 100;
        height = 100;
        break;
      case 2:
        width = 50;
        height = 100;
        break;
      case 3:
      case 4:
        width = 50;
        height = 50;
        break;
      case 5:
      case 6:
        width = 100 / 3;
        height = 100 / 2;
        break;
      default:
        width = 100 / 4;
        height = 100 / 2;
    }

    const templates = streams.map((item) => {
      if (item.is_live) {
        return (
          <HomeVideoBig
            key={item.name}
            hidden={item.is_hidden}
            width={`${width}%`}
            height={`${height}%`}
          >
            <VideoPlayer streamName={item.name} muted={item.is_muted} />
          </HomeVideoBig>
        );
      }
    });
    return templates;
  };
  return (
    <PageWrapper>
      <PageContent>
        <Header />
        <HomeStyled>
          <Grid
            children={
              <HomeWrapper>
                {streams.length == 0 && <EmptyDisplay />}
                {drawStreams(streams)}
              </HomeWrapper>
            }
          />
        </HomeStyled>
      </PageContent>
      <Nav />
      <ControlModal show={visibleModalControl} />
      <ChatModal show={visibleChatModal} />
    </PageWrapper>
  );
};

export default Home;
