import styled from "styled-components";

const ModalStyled = styled.div`
    width: calc(100% - 70px);
    height: 100%;
    position: absolute;
`;

const ModalDialog = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #251b33;
    color: #000000;
    width: 25%;
`;
const ModalContentWrapper = styled.div`
    padding: 20px 20px;
    color: #ffffff;
`;
export { ModalStyled, ModalDialog, ModalContent, ModalContentWrapper };
