import styled from "styled-components";

const EmptyDisplayStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: 10px;
`;
const EmptyWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const EmptyMessage = styled.span`
    opacity: 0.6;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const EmptyButton = styled.div`
    font-size: 16px;
    background-color: #4f386c;
    border: none;
    color: #ffffff;
    opacity: 0.6;
    padding: 8px 30px;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    box-shadow: none;
    outline: none;
    &:focus {
        box-shadow: none;
        outline: none;
    }
`;
export { EmptyDisplayStyled, EmptyMessage, EmptyWrapper, EmptyButton };
