import React from 'react';
import './lobbySelect.scss';

interface lobby {
    label  : string,
    content  : string,
}

const LobbySelect : React.FC<lobby> = ({label, content} : lobby)=>{
       
    if(label === '왁자지껄방'){
        return (
            <>
            <button className={`wa_lobby__box`}>
                <img src='/assets/img/icons/character3.png' alt={label}></img>
                <h2>{label}</h2>
                <div>{content}</div>
            </button>
            </>
        )
    }

    if(label === '퀴즈 풀이'){
        return (
            <>
            <button className={`wa_lobby__box`}>
                <img src='/assets/img/icons/character4.png' alt={label}></img>
                <h2>{label}</h2>
                <div>{content}</div>
            </button>
            </>
        )
    }
}

export default LobbySelect;