import React from 'react';
import './header.scss';

export default function Header(){
    return (
        <>
         <header className='wa_header__container'>
            <div className='wa_header__navbar1'>
                <div className='wa_header__logo'>

                </div>
                <div className='wa_header__icons'>
                    <div className='wa_header__alarm'>
                        <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22c.828 0 1.5-.672 1.5-1.5h-3c0 .828.672 1.5 1.5 1.5z"/>
                            <path d="M18 8v4c0 3 2 4 2 4H4s2-1 2-4V8a6 6 0 1 1 12 0z"/>
                        </svg>
                    </div>
                    <div className='wa_header__home'>
                        <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 11L12 3L21 11V19A1 1 0 0 1 20 20H4A1 1 0 0 1 3 19V11Z"/>
                            <path d="M17 11V6H14V11"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='wa_header__navbar2'>
                
            </div>
         </header>
        </>
    )
}