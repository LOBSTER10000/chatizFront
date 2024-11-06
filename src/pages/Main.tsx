import React from 'react';
import Home from '../shared/page/home/HomeContainer.tsx';
import Header from '../shared/header/Header.tsx';
import Footer from '../shared/footer/Footer.tsx';


const Main : React.FC = ()=>{
    return (
        <>
         <Header />
         <Home />
         <Footer />
        </>
    )
}

export default Main;