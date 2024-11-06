import React from 'react';
import './footer.scss';
import Button from './Button.tsx';
import footers from './footer.json';  

export default function Footer(){

    return (
        <>
         <footer className='wa_footer__container'>
            <div className='wa_footer__flex'>
                <div className='wa_footer__circleBar'>
                    <Button label={footers.buttons.home.label} to='/' naming={footers.buttons.home.naming}/>
                </div>
                <div className='wa_footer__circleBar'>
                    <Button label={footers.buttons.lobby.label} to='/lobby' naming={footers.buttons.lobby.naming}/>
                </div>
                <div className='wa_footer__circleBar'>
                    <Button label={footers.buttons.ranking.label} to='/ranking' naming={footers.buttons.ranking.naming}/>
                </div>
                <div className='wa_footer__circleBar'>
                    <Button label={footers.buttons.feedback.label} to='/feedback' naming={footers.buttons.feedback.naming}/>
                </div>
            </div>
         </footer>
        </>
    )
}