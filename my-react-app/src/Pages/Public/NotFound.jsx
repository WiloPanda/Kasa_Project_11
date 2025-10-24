import React from 'react';
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='notFound'>
            <p className='error404'>404</p>
            <p className='errorMessage'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/home" className="errorLink">
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    );
};

export default NotFound;