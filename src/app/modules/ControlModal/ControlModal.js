import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ADD_STREAM } from "../../actions/actionTypes";
import {
    ModalStyled,
    ModalDialog,
    ModalContent,
    ModalContentWrapper,
    ModalListWrapper,
    ListWrapper,
} from "./ControlModal.styles";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import Heading from "../../components/Heading";

const Modal = ({ show }) => {
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
    };

    return (
        <ModalStyled show={show}>
            <ModalDialog>
                <ModalContent>
                    <ModalContentWrapper>
                        <Heading children="Type a streamer name" />
                        <Input
                            id="stream-name"
                            value={inputValue}
                            onChange={setInputValue}
                            onKeyDown={handleStreamNameChange}
                        />
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
