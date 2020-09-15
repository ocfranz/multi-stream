import styled from "styled-components";

const ButtonIconStyled = styled.button`
    border: none;
    height: 32px;
    width: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 0px 0px 0px 5px;
    background-color: ${(props) => (props.active ? "#db4655" : "#4f386c")};
    cursor: pointer;
    box-shadow: none;
    outline: none;
    border-radius: 30%;
    &:focus {
        box-shadow: none;
        outline: none;
    }
`;
export { ButtonIconStyled };
