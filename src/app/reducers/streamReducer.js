const initialState = {
    streams: [],
};

export const streamReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_STREAM":
            return { ...state, showModalAdd: action.payload };
        default:
            return state;
    }
};
