import React from "react";
import {
    PageWrapper,
    HomeStyled,
    HomeWrapper,
    HomeVideoBig,
    HomeVideoList,
} from "./Home.styles";
import { useSelector, useDispatch } from "react-redux";

import { PageContent } from "../../components/Page/Page.styles";
import Grid from "../../components/Grid";
import VideoPlayer from "../../components/VideoPlayer";
import Header from "../../modules/Header";
import Nav from "../../modules/Nav";
import ControlModal from "../../modules/ControlModal";
const Home = ({}) => {
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
                                <HomeVideoBig>
                                    <VideoPlayer />
                                </HomeVideoBig>
                                <HomeVideoList></HomeVideoList>
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
