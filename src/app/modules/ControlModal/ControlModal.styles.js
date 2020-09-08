import styled from "styled-components";

const ModalStyled = styled.div`
    width: calc(100% - 70px);
    height: 100%;
    position: absolute;
    display: ${(props) => (props.show ? "block" : "none")};
`;

const ModalDialog = styled.div`
    width: 100%;
    height: 100%;
`;
const ModalContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #251b33;
    color: #000000;
    width: 30%;
    -webkit-box-shadow: -5px 1px 11px -1px rgba(49, 35, 67, 1);
    -moz-box-shadow: -5px 1px 11px -1px rgba(49, 35, 67, 1);
    box-shadow: -5px 1px 11px -1px rgba(49, 35, 67, 1);
`;
const ModalContentWrapper = styled.div`
    padding: 20px 20px;
    color: #ffffff;
`;
const ModalSearchWrapper = styled.div`
    position: relative;
`;
const ModalListWrapper = styled.div`
    padding: 20px 0px;
    color: #ffffff;
`;
const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export {
    ModalStyled,
    ModalDialog,
    ModalContent,
    ModalSearchWrapper,
    ModalContentWrapper,
    ModalListWrapper,
    ListWrapper,
};
