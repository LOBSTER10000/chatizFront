import React, { useEffect, useState } from 'react';
import './feedback.scss';
import QuizContainer from '../../quiz/components/QuizContainer.tsx';


const FeedbackContainer : React.FC = ()=>{
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        setSuccess(true);
    }, []);


    if(success){
        return (
            <>
            <QuizContainer/>
            </>
        )
    }

    return (
        <>
         <div className='wa_feedback__container'>
            <section className='wa_feedback__box'>
                <div className='wa_feedback__title'>
                    피드백
                </div>
                <div className='wa_feedback__img'>
                    <img src='/assets/img/icons/character2.png' alt="icon" />
                </div>
                <div className='wa_feedback__textareaBox'>
                    <textarea name="" id="wa_feedback__textarea"></textarea>
                </div>
                <div className='wa_feedback__submit'>
                    <button>submit</button>
                </div>
            </section>
         </div>
        </>
    )
}

export default FeedbackContainer;