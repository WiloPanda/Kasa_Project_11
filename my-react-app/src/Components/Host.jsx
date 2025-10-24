import React from 'react';

const Host = ({ name, picture }) => {
    return (
        <div className='host'>
            <span className='host__name'>{name}</span>
            <img className='host__picture' alt="photo de profile de l'hôte {nom}" src={picture} />
        </div>
    );
};

export default Host;