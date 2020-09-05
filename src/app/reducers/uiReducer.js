const initialStateUi = {
    showModal : true
}

export const uiReducer = (state= initialStateUi, action) => {
    switch (action.type) {
        case "SHOW_MODAL_CONTROL":
            return { ...state, showModalAdd: action.payload };
        default:
            return state;
    }
};