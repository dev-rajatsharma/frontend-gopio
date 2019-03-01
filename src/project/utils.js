//commmon functions placed in one file
import React from 'react';
import {FacebookIcon} from 'react-share';

export const emailValidation = (email) => {
    return (!!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
}
export const nameValidation = (name) => {
    return (!!name.match(/^[a-zA-Z0-9]+ ?([a-zA-Z0-9]+$){1}/))
}

export const renderFaceBookPage=()=>{
    return(
        <div className='facebook-con' title='Visit our facebook page'>
            {/* <a href='https://www.facebook.com/gopiova/'
                className=''
                target='_blank' rel='noopener noreferrer'> */}
                <FacebookIcon size={32} round={true} />
            {/* </a> */}
        </div>
    )
}