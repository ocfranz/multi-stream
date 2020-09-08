import React from "react";
import { TOGGLE_MODAL_CONTROL } from "../../actions/types";
import {
    EmptyDisplayStyled,
    EmptyMessage,
    EmptyWrapper,
    EmptyButton,
} from "./EmptyDisplay.styles";
import { useDispatch } from "react-redux";
const EmptyDisplay = () => {
    const dispatch = useDispatch();
    const handleOnClickEmptyButton = () => {
        dispatch({ type: TOGGLE_MODAL_CONTROL, payload: true });
    };

    return (
        <EmptyDisplayStyled>
            <EmptyWrapper>
                <div style={{}}>
                    <div></div>
                    <div></div>
                </div>
                <EmptyMessage>No streams yet</EmptyMessage>
                <EmptyButton onClick={handleOnClickEmptyButton}>
                    Add new stream
                </EmptyButton>
            </EmptyWrapper>
        </EmptyDisplayStyled>
    );
};
export default EmptyDisplay;
