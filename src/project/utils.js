//commmon functions placed in one file
import React from 'react';
import {FacebookIcon} from 'react-share';

export const emailValidation = (email) => {
    return (!!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
}

export const renderFaceBookPage=()=>{
    return(
        <div className='facebook-con' title='Visit our facebook page'>
            <a href='https://www.facebook.com/gopiova/'
                className=''
                target='_blank' rel='noopener noreferrer'>
                <FacebookIcon size={32} round={true} />
                    {/* <img src={facebook_logo} className='img-responsive rounded-circle w-100 h-100' alt='facebook' /> */}
            </a>
        </div>
    )
}