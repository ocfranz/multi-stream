import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import {
    HIDE_STREAM,
    REMOVE_STREAM,
    MUTE_STREAM,
} from "../../actions/types";
import {
    ItemStyled,
    ItemDetail,
    ItemActions,
    ItemName,
} from "./ListItem.styles";
import DeleteIcon from "./DeleteIcon";
import MuteIcon from "./MuteIcon";
import EyeOffIcon from "./EyeOffIcon";
import Avatar from "../Atavar";
import ButtonIcon from "../ButtonIcon";

const ListItem = ({ avatarSrc, name, isLive }) => {
    const dispatch = useDispatch();

    const handleOnClickMute = () => {
        dispatch({ type: MUTE_STREAM, payload: name });
    };
    const handleOnClickHide = () => {
        dispatch({ type: HIDE_STREAM, payload: name });
    };

    const handleOnClickDelete = () => {
        dispatch({ type: REMOVE_STREAM, payload: name });
    };
    return (
        <ItemStyled>
            <ItemDetail>
                <Avatar src={avatarSrc} active={isLive} />
                <ItemName>{name}</ItemName>
            </ItemDetail>
            <ItemActions>
                <ButtonIcon
                    children={<EyeOffIcon color="#ffffff" />}
                    onClick={handleOnClickHide}
                />
                <ButtonIcon
                    children={<MuteIcon color="#ffffff" />}
                    onClick={handleOnClickMute}
                />
                <ButtonIcon
                    children={<DeleteIcon color="#ffffff" />}
                    onClick={handleOnClickDelete}
                />
            </ItemActions>
        </ItemStyled>
    );
};

ListItem.defaultProps = {
    name: "Jhon Doe",
};

ListItem.propTypes = {
    name: PropTypes.string,
    avatarSrc: PropTypes.string,
    isLive: PropTypes.bool,
};

export default ListItem;
