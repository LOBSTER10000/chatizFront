import React from 'react';
import './chatRoomSearchContainer.scss';
import chatJson from './chatRoom.json';
import Search from './Search.tsx';
import Create from './Create.tsx';
import Sort from './Sort.tsx';
import CardBox from './CardBox.tsx';

const ChatRoomSearchContainer : React.FC= ()=>{
    return (
        <>
        <div className='wa_chatRoom__search'>
            <div className='wa_chatRoom__box'>
                <div className='wa_chatRoom__title'>{chatJson.kr.title}</div>
                <div className='wa_chatRoom__features'>
                    <Search type='chatRoom' search={chatJson.kr.search}/>
                    <Create type='chatRoom' create={chatJson.kr.create}/>
                    <Sort type='chatRoom' sort={chatJson.kr.sort}/>
                </div>
            <CardBox type='chatRoom'/>
            </div>
        </div>
        </>
    )
}

export default ChatRoomSearchContainer;