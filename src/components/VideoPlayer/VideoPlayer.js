import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PlayerStyled } from "./VideoPlayer.styles";

const VideoPlayer = ({ streamName, muted }) => {
  const { location } = document;
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    setPlayer(
      new Twitch.Player(streamName, {
        width: "100%",
        height: "100%",
        channel: streamName,
        parent: [location.hostname],
      })
    );
  }, []);

  useEffect(() => {
    if (player != null) {
      player.setMuted(muted);
    }
  }, [muted]);

  return <PlayerStyled id={streamName}></PlayerStyled>;
};

VideoPlayer.propTypes = {
  streamName: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
};

export default VideoPlayer;
