import { TOGGLE_MODAL_CONTROL } from "../actions/types";
const initialStateUi = {
    showModal: false,
};

export const uiReducer = (state = initialStateUi, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_CONTROL:
            return { ...state, showModal: action.payload };
        default:
            return state;
    }
};
