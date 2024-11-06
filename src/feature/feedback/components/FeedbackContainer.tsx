import React, { useEffect, useState } from 'react';
import './feedback.scss';
import Success from './Success.tsx';


const FeedbackContainer : React.FC = ()=>{
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        setSuccess(true);
    }, []);


    if(success){
        return (
            <>
            <Success/>
            </>
        )
    }

    return (
        <>
         <div className='wa_feedback__container'>
            <section>
                <div className='wa_feedback__box'>
        
                </div>
                
            </section>
         </div>
        </>
    )
}

export default FeedbackContainer;