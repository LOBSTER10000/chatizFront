import React from 'react';
import './home.scss';
import ProfileImg from '../../../feature/user/components/ProfileImg.tsx';

export default function Home(){

    return (
        <>
        <div className='wa_home__container'>
            <ProfileImg/>
        </div>
        </>
    )
}