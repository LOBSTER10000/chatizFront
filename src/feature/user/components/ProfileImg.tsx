import React, { useState } from 'react';
import './profileImg.scss';

const ProfileImg : React.FC = ()=>{
    const [isLogin] = useState(false);

    if(isLogin === false){
        return (
            <>
            <div className='wa_user__profile'>
                <img src="/assets/img/icons/character2.png" alt="gg" id='wa_user__profileImg'/>
            </div>
            </>
        )
    }

    return (
        <>
        <div className='wa_user__profile'>
            <img src="/profile/lobster100.webp" alt="gg" id='wa_user__profileImg'/>
        </div>
        </>
    )
}

export default ProfileImg;