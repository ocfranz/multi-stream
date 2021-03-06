import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { TOGGLE_MODAL_CHAT } from "../../actions/types";
import {
  ModalStyled,
  ModalDialog,
  ModalContent,
} from "../ControlModal/ControlModal.styles";
import { ChatModalWrapper, ChatSelectHeading } from "./ChatModal.styles";
import Select from "../../components/Select";
import EmbeddedChat from '../../components/EmbeddedChat'
const ChatModal = ({ show }) => {
  const chatModalRef = useRef(null);
  const streams = useSelector((state) => state.streamReducer.streams);
  const dispatch = useDispatch();
  const [indexChat, setIndexChat] = useState(0);
  useEffect(() => {
    if (show) {
      document.getElementById("stream-name").focus();
      document.addEventListener(
        "click",
        (event) => {
          handleClickOutside(event, chatModalRef);
        },
        true
      );
    }
  });

  const handleClickOutside = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      document.removeEventListener("click", () => {}, true);
      closeChatModal();
    }
  };

  const closeChatModal = () => {
    dispatch({ type: TOGGLE_MODAL_CHAT, payload: false });
  };
  const handleOnSelect = (stream) => {
    let selectIndex = 0;
    streams.map((item, index) => {
      if (item.name == stream) {
        selectIndex = index;
      }
    });
    setIndexChat(selectIndex);
  };
  return (
    <ModalStyled show={show}>
      <ModalDialog>
        <ModalContent ref={chatModalRef}>
          <ChatModalWrapper>
            <Select list={streams} onSelect={handleOnSelect} />
            {streams.map((item, index) => {
              if (item.is_live) {
                return (
                  <EmbeddedChat key={`chat__${item.name}`} show={index==indexChat} streamName={item.name}/>
                );
              }
            })}
          </ChatModalWrapper>
        </ModalContent>
      </ModalDialog>
    </ModalStyled>
  );
};

ChatModal.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ChatModal;
