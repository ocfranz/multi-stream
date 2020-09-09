import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { HIDE_STREAM, REMOVE_STREAM, MUTE_STREAM } from "../../actions/types";
import {
    ItemStyled,
    ItemDetail,
    ItemActions,
    ItemName,
} from "./ListItem.styles";
import DeleteIcon from "./DeleteIcon";
import MuteIcon from "./MuteIcon";
import EyeOffIcon from "./EyeOffIcon";
import Avatar from "../Avatar";
import ButtonIcon from "../ButtonIcon";

const ListItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleClickButton = (type) => {
        let dispatchType = "";
        switch (type) {
            case "mute":
                dispatchType = MUTE_STREAM;
                break;
            case "hide":
                dispatchType = HIDE_STREAM;
                break;
            case "remove":
                dispatchType = REMOVE_STREAM;
                break;
            default:
                throw new Error("Error on type of error");
        }
        dispatch({ type: dispatchType, payload: item.name });
    };
    return (
        <ItemStyled>
            <ItemDetail>
                <Avatar src={item.thumbnail_url} active={item.is_live} />
                <ItemName>{item.name}</ItemName>
            </ItemDetail>
            <ItemActions>
                <ButtonIcon
                    children={<EyeOffIcon color="#ffffff" />}
                    onClick={() => handleClickButton("hide")}
                    active={item.is_hidden}
                />
                <ButtonIcon
                    children={<MuteIcon color="#ffffff" />}
                    onClick={() => handleClickButton("mute")}
                    active={item.is_muted}
                />
                <ButtonIcon
                    children={<DeleteIcon color="#ffffff" />}
                    onClick={() => handleClickButton("remove")}
                />
            </ItemActions>
        </ItemStyled>
    );
};

ListItem.defaultProps = {
    name: "Jhon Doe",
};

ListItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        game_id: PropTypes.string,
        is_hidden: PropTypes.bool,
        is_live: PropTypes.bool,
        is_muted: PropTypes.bool,
        thumbnail_url: PropTypes.string,
    }).isRequired,
};

export default ListItem;
