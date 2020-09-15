import { TOGGLE_MODAL_CONTROL, TOGGLE_MODAL_CHAT } from "../actions/types";
const initialStateUi = {
  showModal: false,
  showChatModal: false,
};

export const uiReducer = (state = initialStateUi, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_CONTROL:
      return { ...state, showModal: action.payload };
    case TOGGLE_MODAL_CHAT:
      return { ...state, showChatModal: action.payload };
    default:
      return state;
  }
};
