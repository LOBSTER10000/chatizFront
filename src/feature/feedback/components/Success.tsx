import React from 'react';
import SuccessJson from './success.json';
import './success.scss';

const Success : React.FC = ()=>{
    
    return (
        <>
         <div className='wa_feedback__success'>
            <div id='wa_feedback__successImg'>
                <img src="/assets/img/icons/character1.png" alt="gg" />
            </div>
            <div>{SuccessJson.content_title}</div>
            <br></br>
            <div>{SuccessJson.content_text}</div>
         </div>
        </>
    )
}

export default Success;