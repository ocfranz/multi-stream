import React from "react";
import PropTypes from "prop-types";
import { AvatarStyled, AvatarText } from "./Avatar.styles";

const Avatar = ({ src }) => {
    return (
        <>
            {src === undefined && <AvatarText>A</AvatarText>}
            {typeof src === "string" && (
                <AvatarStyled
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Avatar user"
                />
            )}
        </>
    );
};

Avatar.propTypes = {
    src: PropTypes.string,
};
export default Avatar;
