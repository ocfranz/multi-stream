import styled from "styled-components";

const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
`;
const ItemDetail = styled.div`
    display: flex;
    align-items: center;
`;
const ItemActions = styled.div`
    display: flex;
    align-items: center;
`;
const ItemName = styled.span`
    font-size: 16px;
    padding: 0px 0px 0px 10px;
    text-transform: capitalize;
`;
export { ItemStyled, ItemDetail, ItemActions, ItemName };
