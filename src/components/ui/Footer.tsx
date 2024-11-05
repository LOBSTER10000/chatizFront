import React from 'react';
import '../../assets/scss/footer.scss';
import Button from './footer/Button.tsx';

export default function Footer(){
    

    return (
        <>
         <footer className='wa_footer__container'>
            <div className='wa_footer__flex'>
                <div className='wa_footer__circleBar'>
                    <Button label='home' to='/' naming='홈'/>
                </div>
                <div className='wa_footer__circleBar'>
                    <Button label='robby' to='/lobby' naming='로비'/>
                </div>
                <div className='wa_footer__circleBar'>
                    <Button label='ranking' to='/ranking' naming='랭킹'/>
                </div>
                <div className='wa_footer__circleBar'>
                    <Button label='feedback' to='/feedback' naming='피드백'/>
                </div>
            </div>
         </footer>
        </>
    )
}