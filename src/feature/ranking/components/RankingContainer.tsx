import React from 'react';
import './ranking.scss';
import RankingGraph from './RankingGraph.tsx';
import RankingPrime from './RankingPrime.tsx';
import UseRankingData from '../hooks/UseRankingData.tsx';

const RankingContainer : React.FC = ()=>{
    const {top3, otherRank} = UseRankingData();

   return(
       <>
       <div className='wa_ranking__container'>   
            <RankingPrime top3={top3}/>
            <RankingGraph others={otherRank}/>
       </div>
       </>
   )
}


export default RankingContainer;