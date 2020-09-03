import React from "react";
import { PlayerStyled } from "./VideoPlayer.styles";

const VideoPlayer = ({ children }) => {
    return <PlayerStyled>{children}</PlayerStyled>;
};

export default VideoPlayer;
