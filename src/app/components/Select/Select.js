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

  const handleOnClickItem = (name) => {
    console.log(name);
  };
  return (
    <SelectStyled>
      <SelectButton onClick={handleClickHeading}>Select a stream</SelectButton>
      <SelectList show={showItems}>
        {list.map((item) => {
          return (
            <SelectItem
              key={item.name}
              onClick={() => handleOnClickItem(item.name)}
            >
              {item.name}
            </SelectItem>
          );
        })}
      </SelectList>
    </SelectStyled>
  );
};

Select.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Select;
