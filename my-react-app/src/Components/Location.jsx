import React from 'react';

const Location = ({ location, className = "", }) => {
    return (
        <span className={className}>{location}</span>
    );
};

export default Location;