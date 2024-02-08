import React from 'react'

function AgeTimer() {
    return (
        <div className="agetimer-container">
            <p>4 540 417 319 années 9 mois 15 jours 45 minutes 59 secondes</p>
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