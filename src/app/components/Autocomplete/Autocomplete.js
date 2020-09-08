import React from "react";
import PropTypes from "prop-types";
import { ADD_STREAM } from "../../actions/types";
import { useSelector, useDispatch } from "react-redux";
import { AutocompleteStyled } from "./Autocomplete.styles";

const Autocomplete = ({ list, show, handleOnClose }) => {
    const dispatch = useDispatch();
    const streams = useSelector((state) => state.streamReducer.streams);
    const handleOnClick = (streamName) => {
        const selectedStream = list.filter(
            (item) => item.display_name == streamName
        );
        const streamAdded = streams.filter((item) => item.name == streamName);
        if (streamAdded.length == 0) {
            const newStream = {
                name: selectedStream[0].display_name,
                thumbnail_url: selectedStream[0].thumbnail_url,
                is_live: selectedStream[0].is_live,
                game_id: selectedStream[0].game_id,
                is_hidden: false,
                is_muted: false,
            };
            dispatch({ type: ADD_STREAM, payload: newStream });
            handleOnClose();
        } else {
            console.log("Stream already added");
        }
    };
    return (
        <AutocompleteStyled show={show}>
            {list.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyItems: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => handleOnClick(item.display_name)}
                    >
                        <img
                            style={{ width: "40px", height: "40px" }}
                            src={item.thumbnail_url}
                            alt="streamer thumbnail"
                        />
                        <span>{item.display_name}</span>
                    </div>
                );
            })}
        </AutocompleteStyled>
    );
};

Autocomplete.propTypes = {
    list: PropTypes.array,
    show: PropTypes.bool.isRequired,
};

export default Autocomplete;
