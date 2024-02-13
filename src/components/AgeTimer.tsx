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

export default AgeTimer;