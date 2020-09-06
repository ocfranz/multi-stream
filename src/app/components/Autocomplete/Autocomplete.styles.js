import styled from "styled-components";

const AutocompleteStyled = styled.div`
    display: ${(props) => (props.show ? "flex" : "none")};
    position: absolute;
    height: auto;
    background-color: #ffffff;
    width: 100%;
    color: #000000;
    flex-wrap: wrap;
    flex-direction: column;
`;

export { AutocompleteStyled };
