import React from 'react'
import '../styles/AgeTimer.css';

function AgeTimer() {

    let timerID = null;
    let counter = 0;

    function updateTime() {
        const timer = document.getElementsByClassName("timer")[0];
        timer.innerHTML = "Counter : " + String(counter++);
    }

    async function timeAsync() {
        updateTime();
        await new Promise((resolve) => (timerID = setTimeout(resolve, 1000)));
    }

    /* Start the timer when the page is loaded */
    window.onload = function() {
        timerID = setInterval(timeAsync, 1000);
    }

    return (
        <div className="agetimer-container">
            <p> Age of the earth </p>
            <p className="timer">Coucou</p>
        </div>
    )
}

//Fonction assynchrone appelle la fonction getTimeSeconde toutes les secondes

async function incrementTimer() {
    let date = getTimeSecondes();

    while (true) {
        await new Promise(r => setTimeout(r, 1000));
        date = getTimeSecondes() ;

    }
}


function getTimeSecondes() {
    let date = new Date().getTime();
    let dateSec = Math.floor(date / 1000);
    return dateSec + 4540000000 ;
}

export default AgeTimer;