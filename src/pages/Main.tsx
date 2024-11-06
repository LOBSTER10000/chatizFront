import React from 'react';
import Home from '../components/page/home/HomeContainer.tsx';
import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';


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