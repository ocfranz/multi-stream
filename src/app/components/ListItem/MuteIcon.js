import React from "react";
const VolumeX = ({ size = 24, color = "#000000" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6" />
    </svg>
);
export default VolumeX;
