import { ADD_STREAM } from "../actions/actionTypes";
const initialState = {
    streams: [],
};

export const streamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STREAM:
            return { ...state, streams: [...state.streams, action.payload] };
        default:
            return state;
    }
};
