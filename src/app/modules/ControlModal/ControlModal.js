import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
    ADD_STREAM,
    TOGGLE_MODAL_CONTROL,
    MUTE_ALL_STREAMS,
} from "../../actions/types";
import {
    ModalStyled,
    ModalDialog,
    ModalContent,
    ModalContentWrapper,
    ModalSearchWrapper,
    ModalListWrapper,
    ListWrapper,
    MuteAllButton,
    ListHeader,
} from "./ControlModal.styles";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import Heading from "../../components/Heading";
import Autocomplete from "../../components/Autocomplete";

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
            axios
                .get(`/api/stream/search/${inputValue}`)
                .then((data) => {
                    setSearchList(data.data.data);
                })
                .catch((err) => {
                    console.error("error", err);
                });
        } else {
            setShowAutocomplete(false);
            setSearchList([]);
        }
    };
    const handleMuteAll = () => {
        dispatch({ type: MUTE_ALL_STREAMS, payload: true });
    };

    const closeModalControl = () => {
        dispatch({ type: TOGGLE_MODAL_CONTROL, payload: false });
    };

    const toggleAutocomplete = () => {
        setShowAutocomplete(false);
        setInputValue("");
    };

    return (
        <ModalStyled show={show}>
            <ModalDialog>
                <ModalContent ref={modalContent}>
                    <ModalContentWrapper>
                        <Heading children="Type a streamer name" />
                        <ModalSearchWrapper>
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
                        </ModalSearchWrapper>
                        <ModalListWrapper>
                            <ListHeader>
                                <Heading children="List" />
                                <MuteAllButton onClick={handleMuteAll}>
                                    Mute all
                                </MuteAllButton>
                            </ListHeader>
                            <ListWrapper>
                                {streams.map((item, index) => (
                                    <ListItem
                                        item={item}
                                        name={item.name}
                                        key={item.name}
                                        avatarSrc={item.thumbnail_url}
                                        isLive={item.is_live}
                                    />
                                ))}
                            </ListWrapper>
                        </ModalListWrapper>
                    </ModalContentWrapper>
                </ModalContent>
            </ModalDialog>
        </ModalStyled>
    );
};
Modal.defaultProps = {
    show: false,
};
Modal.propTypes = {
    show: PropTypes.bool,
};
export default Modal;
