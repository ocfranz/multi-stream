import styled from "styled-components";

const NavStyled = styled.div`
    width: 70px;
    height: 100vh;
    background-color: rgb(49, 35, 67);
`;

const NavWrapper = styled.div`
    padding: 0px 15px;
`;
const NavHeading = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
`;
const NavItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0px 0px 0px;
`;

export { NavStyled, NavWrapper, NavHeading, NavItemsWrapper };
