import React from 'react';
import "./Map.css";

const MyPath = ({region, click}) => {
    function onMapClick() {
        click(region)
    }

    const size = region.count===0
    ? 'zero'
    : 'notzero';
    return (
        <path
            className={"path " + size}
            id={region.name}
            d={region.path}
            onClick={onMapClick}>
        </path>
    );
};

export default MyPath;