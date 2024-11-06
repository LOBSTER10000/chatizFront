 import React from 'react';
 import './lobby.scss';
import LobbySelect from './LobbySelect.tsx';
import LobbyJson from './lobbySelect.json';

 export default function LobbyContainer(){

    return(
        <>
        <div className='wa_lobby__container'>
            <section>
                <LobbySelect label={LobbyJson.chat.name} content={LobbyJson.chat.content}/>
                <LobbySelect label={LobbyJson.quiz.name}  content={LobbyJson.quiz.content}/>
            </section>
        </div>
        </>
    )
 }