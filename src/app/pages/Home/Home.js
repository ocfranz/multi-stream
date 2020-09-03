import React from "react";
import {
    PageWrapper,
    HomeStyled,
    HomeWrapper,
    HomeVideoBig,
    HomeVideoList,
} from "./Home.styles";
import { PageContent } from "../../components/Page/Page.styles";
import Grid from "../../components/Grid";
import VideoPlayer from "../../components/VideoPlayer";
import Header from "../../modules/Header";
import Nav from "../../modules/Nav";
const Home = ({}) => {
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
        </PageWrapper>
    );
};

export default Home;
