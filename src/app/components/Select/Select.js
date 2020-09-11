import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  SelectStyled,
  SelectButton,
  SelectList,
  SelectItem,
} from "./Select.styles";
const Select = ({ list }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClickHeading = () => {
    setShowItems(!showItems);
  };
  return (
    <SelectStyled>
      <SelectButton onClick={handleClickHeading}>Select a stream</SelectButton>
      <SelectList show={showItems}>
        {list.map((item) => {
          return <SelectItem>name</SelectItem>;
        })}
      </SelectList>
    </SelectStyled>
  );
};

Select.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Select;
