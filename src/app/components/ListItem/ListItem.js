import React from "react";
import PropTypes from "prop-types";
import {
    ItemStyled,
    ItemDetail,
    ItemActions,
    ItemName,
} from "./ListItem.styles";
import DeteleIcon from "./DeleteIcon";
import MuteIcon from "./MuteIcon";
import EyeOffIcon from "./EyeOffIcon";
import Avatar from "../Atavar";
import ButtonIcon from "../ButtonIcon";
const ListItem = ({ avatarSrc, name }) => {
    return (
        <ItemStyled>
            <ItemDetail>
                <Avatar src={avatarSrc} />
                <ItemName>{name}</ItemName>
            </ItemDetail>
            <ItemActions>
                <ButtonIcon children={<EyeOffIcon color="#ffffff" />} />
                <ButtonIcon children={<MuteIcon color="#ffffff" />} />
                <ButtonIcon children={<DeteleIcon color="#ffffff" />} />
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
};

export default ListItem;
