import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ADD_STREAM } from "../../actions/actionTypes";
import {
    ModalStyled,
    ModalDialog,
    ModalContent,
    ModalContentWrapper,
    ModalSearchWrapper,
    ModalListWrapper,
    ListWrapper,
} from "./ControlModal.styles";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import Heading from "../../components/Heading";
import Autocomplete from "../../components/Autocomplete";

const Modal = ({ show }) => {
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const streams = useSelector((state) => state.streamReducer.streams);

    const handleStreamNameChange = (event) => {
        if (event.keyCode === 13) {
            const newStream = {
                name: inputValue,
                muted: false,
                hidden: false,
            };
            setInputValue("");
            dispatch({ type: ADD_STREAM, payload: newStream });
        }

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

    return (
        <ModalStyled show={show}>
            <ModalDialog>
                <ModalContent>
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
                            />
                        </ModalSearchWrapper>
                        <ModalListWrapper>
                            <Heading children="List" />
                            <ListWrapper>
                                {streams.map((item, index) => (
                                    <ListItem name={item.name} key={index} />
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
