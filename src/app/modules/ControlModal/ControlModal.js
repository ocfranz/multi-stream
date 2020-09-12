import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../../actions/types";
import * as styles from "./ControlModal.styles";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import Heading from "../../components/Heading";
import Autocomplete from "../../components/Autocomplete";
import { getStreamsByKeyword } from "../../helpers/getStreamsByKeyword";

const Modal = ({ show }) => {
  const modalContent = useRef(null);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const streams = useSelector((state) => state.streamReducer.streams);

  useEffect(() => {
    if (show) {
      document.getElementById("stream-name").focus();
      document.addEventListener(
        "click",
        (event) => {
          handleClickOutside(event, modalContent);
        },
        true
      );
    }
  });

  const handleClickOutside = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      document.removeEventListener("click", () => {}, true);
      closeModalControl();
    }
  };

  const handleStreamNameChange = (event) => {
    if (inputValue !== "") {
      setShowAutocomplete(true);
      getStreamsByKeyword(inputValue, setSearchList);
    } else {
      setShowAutocomplete(false);
      setSearchList([]);
    }
  };
  const handleMuteAll = () => {
    dispatch({ type: types.MUTE_ALL_STREAMS, payload: true });
  };

  const closeModalControl = () => {
    dispatch({ type: types.TOGGLE_MODAL_CONTROL, payload: false });
  };

  const toggleAutocomplete = () => {
    setShowAutocomplete(false);
    setInputValue("");
  };

  return (
    <styles.ModalStyled show={show}>
      <styles.ModalDialog>
        <styles.ModalContent ref={modalContent}>
          <styles.ModalContentWrapper>
            <Heading children="Type a streamer name" />
            <styles.ModalSearchWrapper>
              <Input
                id="stream-name"
                value={inputValue}
                onChange={setInputValue}
                onKeyDown={handleStreamNameChange}
              />
              <Autocomplete
                list={searchList}
                show={showAutocomplete}
                handleOnClose={toggleAutocomplete}
              />
            </styles.ModalSearchWrapper>
            <styles.ModalListWrapper>
              <styles.ListHeader>
                <Heading children="List" />
                <styles.MuteAllButton onClick={handleMuteAll}>
                  Mute all
                </styles.MuteAllButton>
              </styles.ListHeader>
              <styles.ListWrapper>
                {streams.map((item, index) => (
                  <ListItem
                    item={item}
                    name={item.name}
                    key={item.name}
                    avatarSrc={item.thumbnail_url}
                    isLive={item.is_live}
                  />
                ))}
              </styles.ListWrapper>
            </styles.ModalListWrapper>
          </styles.ModalContentWrapper>
        </styles.ModalContent>
      </styles.ModalDialog>
    </styles.ModalStyled>
  );
};
Modal.defaultProps = {
  show: false,
};
Modal.propTypes = {
  show: PropTypes.bool,
};
export default Modal;
