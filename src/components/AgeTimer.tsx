import React from 'react'
import '../styles/AgeTimer.css';

function getTimeSecondes() {
    let date = new Date().getTime();
    let dateSec = Math.floor(date / 1000);
    return dateSec ;
}

function AgeTimer() {

    let timerID = null;
    let counter = getTimeSecondes();
    let years = 4543271900 ;

    function updateTime() {
        const timer = document.getElementsByClassName("timer")[0];
        timer.innerHTML = timeConvert(counter++);
    }
    function formalizeNumber(n : number) {
        // Convertir le nombre en une chaîne de caractères
        let numberString = String(n);

        // Créer un tableau pour stocker les parties de la chaîne
        let formattedParts = [];

        // Parcourir la chaîne de caractères de droite à gauche
        for (let i = numberString.length - 1, j = 0; i >= 0; i--, j++) {
            // Ajouter chaque chiffre à un tableau
            if (j > 0 && j % 3 === 0) {
                // Si le nombre de chiffres ajoutés est un multiple de 3, ajouter un espace
                formattedParts.unshift(" ");
            }
            formattedParts.unshift(numberString[i]);
        }

        // Joindre les parties formatées en une seule chaîne et la retourner
        return formattedParts.join("");
    }


    //Fonction qui passe un temps en secondes en année jour heures minutes secondes
    function timeConvert(time : number) {
        let year = Math.floor(time / 31536000) + years ;
        let day = Math.floor((time % 31536000) / 86400);
        let hour = Math.floor(((time % 31536000) % 86400) / 3600);
        let minute = Math.floor((((time % 31536000) % 86400) % 3600) / 60);
        let second = (((time % 31536000) % 86400) % 3600) % 60;
        return formalizeNumber(year) + " years " + day + " days " + hour + " hours " + minute + " minutes " + second + " seconds";
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
        <div className="agetimer-container" id="ageTimer">
            <p> Age of the earth : </p>
            <p className="timer"></p>
        </div>
    )
}

export default AgeTimer;