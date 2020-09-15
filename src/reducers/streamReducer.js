import {
    ADD_STREAM,
    HIDE_STREAM,
    MUTE_STREAM,
    REMOVE_STREAM,
    MUTE_ALL_STREAMS,
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
                streams: state.streams.map((item) =>
                    item.name == action.payload
                        ? { ...item, is_hidden: !item.is_hidden }
                        : item
                ),
            };
        case MUTE_STREAM:
            return {
                ...state,
                streams: state.streams.map((item) =>
                    item.name == action.payload
                        ? { ...item, is_muted: !item.is_muted }
                        : item
                ),
            };
        case REMOVE_STREAM:
            return {
                ...state,
                streams: state.streams.filter(
                    (item) => item.name != action.payload
                ),
            };
        case MUTE_ALL_STREAMS:
            return {
                ...state,
                streams: state.streams.map((item) => ({
                    ...item,
                    is_muted: action.payload,
                })),
            };
        default:
            return state;
    }
};
