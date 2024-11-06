import React from 'react';
import Header from '../shared/header/Header.tsx';
import LobbyContainer from '../shared/page/lobby/LobbyContainer.tsx';
import Footer from '../shared/footer/Footer.tsx';


const Lobby : React.FC = ()=>{

    return (
        <>
         <Header/>
         <LobbyContainer />
         <Footer/>
        </>
    )
}

export default Lobby;