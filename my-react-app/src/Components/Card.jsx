import React from 'react';

const Card = ({ id, title, cover }) => {
    return (
        <li className="card" id={id}>
            <div className="logement-link">
                <img className="card__img" src={cover} alt="Card" />
                <div className='card__shadow'></div>
                <h2 className="card__title">{title}</h2>
            </div>
        </li>
    );
};

export default Card;