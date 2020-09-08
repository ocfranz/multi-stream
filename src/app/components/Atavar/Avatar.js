import React from "react";
import PropTypes from "prop-types";
import { AvatarStyled, AvatarText } from "./Avatar.styles";

const Avatar = ({ src, active }) => {
    return (
        <>
            {src === undefined && <AvatarText>A</AvatarText>}
            {typeof src === "string" && (
                <AvatarStyled src={src} alt="Avatar user" active={active} />
            )}
        </>
    );
};

Avatar.propTypes = {
    src: PropTypes.string,
};
export default Avatar;
