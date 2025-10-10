import React from 'react';

const Banner = ({ className = "", image, texte }) => {
    return (
        <div className={`banner ${className}`}>
            <img className="banner__img" src={image} alt="Bannière Kasa" />
            <p className="banner__txt">{texte}</p>
        </div>
    );
};

export default Banner;