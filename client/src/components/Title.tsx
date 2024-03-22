import React from 'react';
import Image from '../assets/logo_long_spacey_clair.svg';
import '../styles/Title.css';

function Title() {
    return (
        <div className="title-container" id="page-top">
            <img src={Image}  alt="Title"/>
        </div>
    )
}

export default Title;
