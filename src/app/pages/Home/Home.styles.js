import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const HomeStyled = styled.div`
    height: calc(100vh - 60px);
`;

const HomeWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
`;
const HomeVideoBig = styled.div`
    width: 70%;
`;
const HomeVideoList = styled.div`
    width: 30%;
`;

export { PageWrapper, HomeStyled, HomeWrapper, HomeVideoBig, HomeVideoList };
