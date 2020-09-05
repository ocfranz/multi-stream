import styled from "styled-components";

const AvatarStyled = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    cursor: pointer;
`;
const AvatarText = styled.div`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 20px;
    font-weight: bolder;
`;
export { AvatarStyled, AvatarText };
