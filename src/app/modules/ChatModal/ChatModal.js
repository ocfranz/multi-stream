import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import {
  ModalStyled,
  ModalDialog,
  ModalContent,
  ModalContentWrapper,
} from "../ControlModal/ControlModal.styles";
import { ChatSelectHeading } from "./ChatModal.styles";
import Select from "../../components/Select";
const ChatModal = ({ show }) => {
  const streams = useSelector((state) => state.streamReducer.streams);
  return (
    <ModalStyled show={show}>
      <ModalDialog>
        <ModalContent>
          <ModalContentWrapper>
            <Select list={streams} />
            <ChatSelectHeading></ChatSelectHeading>
            {/*streams.map((item) => {
              if (item.is_live) {
                return (
                  <iframe
                    key={item.name}
                    frameBorder="0"
                    scrolling="no"
                    src={`https://www.twitch.tv/embed/${item.name}/chat?parent=localhost`}
                    height="100%"
                    width="100%"
                  ></iframe>
                );
              }
            })*/}
          </ModalContentWrapper>
        </ModalContent>
      </ModalDialog>
    </ModalStyled>
  );
};

ChatModal.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ChatModal;