import React from 'react';
import Header from '../components/header/Header.tsx';
import RankingContainer from '../feature/ranking/components/RankingContainer.tsx';
import Footer from '../components/footer/Footer.tsx';


const Ranking : React.FC = ()=>{

    return(
        <>
        <Header/>
        <RankingContainer/>
        <Footer/>
        </>
    )
}

export default Ranking;