import React from 'react';
import '../styles/AsteroidCounter.css';



function getTimeStampMin() {
    let date = new Date().getTime();
    let timeStampMin = Math.floor(date / 100000) - 17000000;
    return timeStampMin ;
}

function AsteroidCounter() {
    let timerID = null;
    let counter = getTimeStampMin();
    //let nbAsteroids = 600000 + counter ;

    const [nbAsteroid, setNbAsteroid] = React.useState(600000+counter);
    const [StringNbAsteroid, setStringNbAsteroid] = React.useState("") ;

    function updateTime() {
        setNbAsteroid(600000 + counter++) ;
        setStringNbAsteroid(formalize(nbAsteroid));
    }

    function formalize(n : number) {
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

    async function timeAsync() {
        updateTime();
        await new Promise((resolve) => (timerID = setTimeout(resolve, 60000)));
    }

    /* Start the timer when the page is loaded */
    window.addEventListener('load', function() {
        updateTime()
        timerID = setInterval(timeAsync, 60000);
    });
    return (
        <div className="asteroidcounter-container" id="asteroidCount">
            <h2> Number of known astéroïds by humanity : </h2>
            <h2 className="count">{StringNbAsteroid}</h2>
        </div>
    )
}

export default AsteroidCounter;