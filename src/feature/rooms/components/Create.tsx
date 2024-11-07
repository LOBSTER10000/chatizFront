import React from 'react';
import CreateType from '../types/CreateType.tsx';
import './create.scss';

const Create : React.FC<CreateType> = ({type, create} : CreateType)=>{
    
    if(type === 'chatRoom'){
        return (
            <>
            <button className={`${type}__create`}>
                {create}
            </button>
            </>
        )
    }

    if(type === 'quizRoom'){
        return (
            <>
             <button className={`${type}__create`}>
                {create}
             </button>
            </>
        )
    }
}

export default Create;