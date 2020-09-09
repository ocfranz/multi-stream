import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const HomeStyled = styled.div`
    height: calc(100vh - 70px);
`;

const HomeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    position: relative;
`;
const HomeVideoBig = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;

export { PageWrapper, HomeStyled, HomeWrapper, HomeVideoBig };
