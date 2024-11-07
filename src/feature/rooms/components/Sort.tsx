import React from 'react';
import SortType from '../types/SortType.tsx';
import './sort.scss';

const Sort : React.FC<SortType> = ({type, sort} : SortType)=>{
    if(type === 'chatRoom'){
        return (
            <>
            <button className={`${type}__sort`}>
                {sort}
            </button>
            </>
        )
    }

    if(type === 'quizRoom'){
        return (
            <>
            <button className={`${type}__sort`}>
                {sort}
            </button>
            </>
        )
    }
}

export default Sort;