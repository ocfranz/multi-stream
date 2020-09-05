import React from "react";
import PropTypes from "prop-types";
import { InputStyled, InputContainer } from "./Input.styles";
const SimpleInput = ({ type, id, placeholder, onChange }) => {
    return (
        <InputContainer>
            <label for={id}></label>
            <InputStyled
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </InputContainer>
    );
};

SimpleInput.defaultProps = {
    type: "text",
    placeholder: "Type here",
};

SimpleInput.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default SimpleInput;
