import React, { useEffect, useState } from 'react';
import CardType from '../types/CardType.tsx';
import './cardBox.scss';
import roomJson from './room.json';

interface Data {
    number : number,
    title : string,
    population : number,
    creater : string,
    password : boolean,
}

const CardBox : React.FC<CardType> = ({type} : CardType)=>{
    const data = roomJson;
    const [isChatData, setIsChatData] = useState<Data[]>();
    
    useEffect(()=>{
        setIsChatData(data.chat);
    }, [data.chat]);
    
    if(type === 'chatRoom'){
        
        return (
            <>
            <div className={`wa_card__box ${type}__Box`}>
                {isChatData?.map((item)=>(
                    <div className='wa_cardBoxes' key={item.number}>
                        <div className='wa_card__img'>
                            <img src="/profile/lobster100.webp" alt="hh" />
                        </div>
                        <div className='wa_card__title'>{item.title}</div>
                        <div className='wa_card__population'>{item.population}</div>
                        <div className='wa_card__creater'>{item.creater}</div>
                    </div>
                ))}
            </div>
            </>
        )
    }


    if(type === 'quizRoom'){
        
        return (
            <>
            <div className={`wa_card__box ${type}__Box`}>
                <div className='wa_cardBoxes'>
                    <div className='wa_card__img'>
                        <img src="/profile/lobster100.webp" alt="hh" />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default CardBox;