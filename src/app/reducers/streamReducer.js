import {
    ADD_STREAM,
    HIDE_STREAM,
    MUTE_STREAM,
    REMOVE_STREAM,
} from "../actions/types";
const initialState = {
    streams: [],
};

export const streamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STREAM:
            return { ...state, streams: [...state.streams, action.payload] };
        case HIDE_STREAM:
            return {
                ...state,
                stream: state.streams.map((item) =>
                    item.name == action.payload ? { ...item, is_hidden: true } : item
                ),
            };
        case MUTE_STREAM:
            break;
        case REMOVE_STREAM:
            return {
                ...state,
                streams: state.streams.filter(
                    (item) => item.name != action.payload
                ),
            };
        default:
            return state;
    }
};
