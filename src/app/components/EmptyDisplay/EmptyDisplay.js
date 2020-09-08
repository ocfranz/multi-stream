import React from "react";

import {
    EmptyDisplayStyled,
    EmptyImage,
    EmptyMessage,
} from "./EmptyDisplay.styles";
import CurvedArrow from "./curved_arrow.png";
const EmptyDisplay = () => {
    return (
        <EmptyDisplayStyled>
            <EmptyImage src={CurvedArrow} alt="curved arrow image" />
            <EmptyMessage>Push plus button to add a stream</EmptyMessage>
        </EmptyDisplayStyled>
    );
};
export default EmptyDisplay;
