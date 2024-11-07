import React from 'react';
import ChatRoomSearchContainer from '../feature/rooms/components/ChatRoomSearchContainer.tsx';
import QuizRoomSearchContainer from '../feature/rooms/components/QuizRoomSearchContainer.tsx';
import Header from '../shared/header/Header.tsx';
import Footer from '../shared/footer/Footer.tsx';
import { useParams } from 'react-router-dom';
const RoomSearch : React.FC = ()=>{
    let {type}  = useParams();

    if(type === 'chatRoom'){
        return (
            <>
            <Header/>
            <ChatRoomSearchContainer />  
            <Footer/>      
            </>
        )
    }

    if(type === 'quizRoom'){
        return (
            <>
            <Header/>
            <QuizRoomSearchContainer />
            <Footer/>        
            </>
        )
    }
}

export default RoomSearch;