import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({label, to, naming}){

    return (
        <>
         <Link to={to} className={`footer-button ${label}`}>
            {naming}
         </Link>
        </>
    )
}