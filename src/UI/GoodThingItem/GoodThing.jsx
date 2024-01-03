import React from 'react';

const GoodThing = ({kindThing}) => {
    return (
        <div>
            <h2>{kindThing.header}</h2>
            <h3>{kindThing.body}</h3>
        </div>
    );
};

export default GoodThing;