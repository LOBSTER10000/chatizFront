import React from 'react';
import Header from '../components/header/Header.tsx';
import LobbyContainer from '../components/page/lobby/LobbyContainer.tsx';
import Footer from '../components/footer/Footer.tsx';


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