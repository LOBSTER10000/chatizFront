import React from 'react';
import FeedbackContainer from '../feature/feedback/components/FeedbackContainer.tsx';
import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';


const Feedback : React.FC = ()=>{
    
    return (
        <>
         <Header />
         <FeedbackContainer/>
         <Footer/>        
        </>
    )
}

export default Feedback;