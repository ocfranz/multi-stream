import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { AutocompleteStyled } from "./Autocomplete.styles";

const Autocomplete = ({ list, show }) => {
    useEffect(() => {
        console.log(list);
    });
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
