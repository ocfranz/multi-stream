import React from "react";
import PropTypes from "prop-types";
import { EmbeddedChatStyled } from "./EmbeddedChat.styles";
const EmbeddedChat = ({ show, streamName }) => {
  return (
    <EmbeddedChatStyled show={show}>
      <iframe
        frameBorder="0"
        scrolling="no"
        src={`https://www.twitch.tv/embed/${streamName}/chat?parent=localhost&darkpopout=true`}
        height="100%"
        width="100%"
      ></iframe>
    </EmbeddedChatStyled>
  );
};

EmbeddedChat.propTypes = {
  show: PropTypes.bool.isRequired,
  streamName: PropTypes.string.isRequired,
};

export default EmbeddedChat;
