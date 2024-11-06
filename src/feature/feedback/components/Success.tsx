import React from 'react';
import SuccessJson from './success.json';
import './success.scss';

const Success : React.FC = ()=>{
    
    return (
        <>
         <div className='wa_feeback__success'>
            <div>{SuccessJson.content_title}</div>
            <br></br>
            <div>{SuccessJson.content_text}</div>
         </div>
        </>
    )
}

export default Success;