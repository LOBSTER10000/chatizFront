import React from 'react';
import './quizRoomSearchContainer.scss';
import quizJson from './quizRoom.json';
import Search from './Search.tsx';
import Create from './Create.tsx';
import Sort from './Sort.tsx';
import CardBox from './CardBox.tsx';

const QuizRoomSearchContainer : React.FC= ()=>{
    return (
        <>
        <div className='wa_quizRoom__search'>
            <div className='wa_quizRoom__box'>
                <div className='wa_quizRoom__title'>{quizJson.kr.title}</div>
                <div className='wa_quizRoom__features'>
                    <Search type='quizRoom' search={quizJson.kr.search}/>
                    <Create type='quizRoom' create={quizJson.kr.create}/>
                    <Sort type='quizRoom' sort={quizJson.kr.sort}/>
                </div>
                <CardBox type='quizRoom'/>
            </div>
        </div>
        </>
    )
}

export default QuizRoomSearchContainer;