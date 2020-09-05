import React from "react";
import PropTypes from "prop-types";
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
    const handleStreamNameChange = (event) => {};
    return (
        <ModalStyled show={show}>
            <ModalDialog>
                <ModalContent>
                    <ModalContentWrapper>
                        <Heading children="Type a streamer name" />
                        <Input
                            id="stream-name"
                            onChange={handleStreamNameChange}
                        />
                        <ModalListWrapper>
                            <Heading children="List" />
                            <ListWrapper>
                                <ListItem name="staryuuki" />
                                <ListItem />
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
