import React from 'react';
import Image from '../assets/logo_long_spacey_clair.svg';
function Title() {
    return (
        <div className="title-container" id="page-top">
            <img src={Image}  alt="Title" height={80}/>
        </div>
    )
}

export default Title;
