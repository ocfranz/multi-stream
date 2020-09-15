import styled from "styled-components";

const NavItemStyled = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 30%;
    outline: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    background-color: #4f386c;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 15px 0px;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export { NavItemStyled };
