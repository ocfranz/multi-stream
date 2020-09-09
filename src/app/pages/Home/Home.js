import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    PageWrapper,
    HomeStyled,
    HomeWrapper,
    HomeVideoBig,
} from "./Home.styles";
import { PageContent } from "../../components/Page/Page.styles";
import Grid from "../../components/Grid";
import VideoPlayer from "../../components/VideoPlayer";
import EmptyDisplay from "../../components/EmptyDisplay";
import Header from "../../modules/Header";
import Nav from "../../modules/Nav";
import ControlModal from "../../modules/ControlModal";
const Home = ({}) => {
    const streams = useSelector((state) => state.streamReducer.streams);
    const visibleModalControl = useSelector(
        (state) => state.uiReducer.showModal
    );
    return (
        <PageWrapper>
            <PageContent>
                <Header />
                <HomeStyled>
                    <Grid
                        children={
                            <HomeWrapper>
                                {streams.length == 0 && <EmptyDisplay />}
                                {streams.map((item) => {
                                    if (item.is_live) {
                                        return (
                                            <HomeVideoBig
                                                key={item.name}
                                                hidden={item.is_hidden}
                                                width={`${
                                                    streams.length === 1
                                                        ? 100
                                                        : 50
                                                }%`}
                                                height={`${
                                                    streams.length === 1
                                                        ? 100
                                                        : 50
                                                }%`}
                                            >
                                                <VideoPlayer
                                                    streamName={item.name}
                                                    muted={item.is_muted}
                                                />
                                            </HomeVideoBig>
                                        );
                                    }
                                })}
                            </HomeWrapper>
                        }
                    />
                </HomeStyled>
            </PageContent>
            <Nav />
            <ControlModal show={visibleModalControl} />
        </PageWrapper>
    );
};

export default Home;
