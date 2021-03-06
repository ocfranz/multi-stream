import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavStyled,
  NavWrapper,
  NavHeading,
  NavItemsWrapper,
} from "./Nav.styles";
import { TOGGLE_MODAL_CONTROL, TOGGLE_MODAL_CHAT } from "../../actions/types";
import Avatar from "../../components/Avatar";
import NavItem from "../../components/NavItem";

import AddIcon from "./AddIcon";
import SettingIcon from "./SettingIcon";
import ChatIcon from "./ChatIcon";
const Sidebar = () => {
  const dispatch = useDispatch();
  const handleAddClick = () => {
    console.log("sss");
    dispatch({ type: TOGGLE_MODAL_CONTROL, payload: true });
  };
  const handleSettingsClick = () => {};
  const handleChatClick = () => {
    dispatch({ type: TOGGLE_MODAL_CHAT, payload: true });
  };

  return (
    <NavStyled>
      <NavWrapper>
        <NavHeading>
          <Avatar />
        </NavHeading>
        <NavItemsWrapper>
          <NavItem
            onClick={handleAddClick}
            children={<AddIcon color="#dbdbdb" />}
          />
          <NavItem
            onClick={handleChatClick}
            children={<ChatIcon color="#dbdbdb" />}
          />
          <NavItem
            onClick={handleSettingsClick}
            children={<SettingIcon color="#dbdbdb" />}
          />
        </NavItemsWrapper>
      </NavWrapper>
    </NavStyled>
  );
};
export default Sidebar;
