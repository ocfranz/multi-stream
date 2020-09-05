import React from "react";
import PropTypes from "prop-types";
import {
    ModalStyled,
    ModalDialog,
    ModalContent,
    ModalContentWrapper,
} from "./ControlModal.styles";
import Input from "../../components/Input";
import Heading from "../../components/Heading";
const Modal = ({}) => {
    const handleStreamNameChange = (event) => {};
    return (
        <ModalStyled>
            <ModalDialog>
                <ModalContent>
                    <ModalContentWrapper>
                        <Heading children="Type a streamer name" />
                        <Input
                            id="stream-name"
                            onChange={handleStreamNameChange}
                        />
                    </ModalContentWrapper>
                </ModalContent>
            </ModalDialog>
        </ModalStyled>
    );
};
export default Modal;
