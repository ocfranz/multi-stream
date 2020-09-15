import styled from "styled-components";

const InputStyled = styled.input`
    padding: 8px 10px;
    font-size: 16px;
    width: 100%;
    box-shadow: none;
    outline: none;
    border: none;
    background-color: #4f386c;
    color: rgba(255, 255, 255, 0.8);
    font-weight: bold;
    &:focus {
        box-shadow: none;
        outline: none;
    }
`;
const InputContainer = styled.div`
    display: flex;
`;
export { InputStyled, InputContainer };
