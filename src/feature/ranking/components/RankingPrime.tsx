import React from 'react';
import RankingType from '../types/RankingType.tsx';
import './rankingPrime.scss';

interface GraphProps {
    top3 : RankingType[];
}

const RankingPrime : React.FC<GraphProps> = ({top3})=>{
   
    return(
        <>
        <div className='wa_ranking__prime'>
            <div className='wa_ranking__second'>
                <img src="/assets/img/icons/character2.png" alt="gg" />
                <div>{top3[1]?.username}</div>
                <div>{top3[1]?.point}</div>
                <div id='top2'>{top3[1]?.number}</div>
            </div>
            <div>
                <img src="/assets/img/icons/character2.png" alt="gg" />
                <div>{top3[0]?.username}</div>
                <div>{top3[0]?.point}</div>
                <div id='top1'>{top3[0]?.number}</div>
            </div>
            <div>
                <img src="/assets/img/icons/character2.png" alt="gg" />
                <div>{top3[2]?.username}</div>
                <div>{top3[2]?.point}</div>
                <div id='top3'>{top3[2]?.number}</div>
            </div>
        </div>
        </>
    )
}

export default RankingPrime;