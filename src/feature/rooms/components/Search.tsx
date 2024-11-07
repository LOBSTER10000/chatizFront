import React from 'react';
import SearchType from '../types/SearchType.tsx'
import './search.scss';

const Search : React.FC<SearchType> = ({type, search} : SearchType)=>{

    if(type === 'chatRoom'){

        return (
            <>
            <button className={`wa_chatButton__search ${type}__search`}>
                {search}
            </button>
            </>
        )
    }

    if(type === 'quizRoom'){
        return (
            <>
            <button className={`wa_chatButton__search ${type}__search`}>
                {search}
            </button>
            </>
        )
    }

}

export default Search;