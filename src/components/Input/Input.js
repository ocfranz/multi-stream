import React from "react";
import PropTypes from "prop-types";
import { InputStyled, InputContainer } from "./Input.styles";
const SimpleInput = ({ type, value, id, placeholder, onKeyDown, onChange }) => {
    const handleOnChange = (event) => {
        onChange(event.target.value);
    };
    return (
        <InputContainer>
            <label for={id}></label>
            <InputStyled
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                onChange={handleOnChange}
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
