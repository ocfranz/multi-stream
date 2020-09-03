import React from "react";
import { HomeWrapper } from "./Home.styles";
import Grid from "../../components/Grid";
import Header from "../../modules/Header";
import VideoPlayer from "../../components/VideoPlayer";
const Home = ({}) => {
    return (
        <Grid
            children={
                <>
                    <Header />
                    <HomeWrapper>
                        <div>
                        <VideoPlayer />
                        </div>
                        <div>
                            
                        </div>
                        
                    </HomeWrapper>
                </>
            }
        ></Grid>
    );
};

export default Home;
