import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    label : string,
    to : string,
    naming : string,
}

export default function Button({label, to, naming} : ButtonProps){

    return (
        <>
         <Link to={to} className={`footer-button ${label}`}>
            {naming}
         </Link>
        </>
    )
}