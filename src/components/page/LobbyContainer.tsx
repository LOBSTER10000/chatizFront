 import React from 'react';
 import '../../assets/scss/lobby.scss';

 export default function LobbyContainer(){

    return(
        <>
        <div className='wa_lobby__container'>
            <section>
                <div className='wa_lobby__chat'></div>
                <div className='wa_lobby__game'></div>
            </section>
        </div>
        </>
    )
 }