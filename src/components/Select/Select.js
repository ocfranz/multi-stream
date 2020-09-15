import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  SelectStyled,
  SelectButton,
  SelectList,
  SelectItem,
} from "./Select.styles";
const Select = ({ list, onSelect }) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [showItems, setShowItems] = useState(false);
  const handleClickHeading = () => {
    setShowItems(!showItems);
  };
  useEffect(() => {
    if (list[selectIndex] == undefined) {
      setSelectIndex(0);
      onSelect(0);
    }
  }, [list]);

  const handleOnClickItem = (name, index) => {
    onSelect(name);
    setShowItems(false);
    setSelectIndex(index);
  };
  return (
    <SelectStyled>
      <SelectButton onClick={handleClickHeading}>
        {list.length > 0
          ? list[selectIndex] == undefined
            ? `${list[0].name}'s chat`
            : `${list[selectIndex].name}'s chat`
          : "No streams added"}
      </SelectButton>
      <SelectList show={showItems}>
        {list.map((item, index) => {
          if (index != selectIndex) {
            return (
              <SelectItem
                key={`list__item__${item.name}`}
                onClick={() => handleOnClickItem(item.name, index)}
              >
                {item.name}
              </SelectItem>
            );
          }
        })}
      </SelectList>
    </SelectStyled>
  );
};

Select.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Select;
