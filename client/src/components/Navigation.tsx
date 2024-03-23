import React, { useEffect, useState } from 'react';
import '../styles/Navigation.css';
import LogotypeClair from '../assets/logotype_spacey_clair.svg';
import LogotypeFonce from '../assets/logotype_spacey_fonce.svg';


function Navigation() {

    const [navbarShrink, setNavbarShrink] = useState(false);
    const [logotype, setLogotype] = useState(LogotypeClair);

    const setLogotypeClair = () => {
        // Change dynamiquement la source de l'image
        setLogotype(LogotypeClair);
    };

    const setLogotypeFonce = () => {
        // Change dynamiquement la source de l'image
        setLogotype(LogotypeFonce);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setNavbarShrink(false);
                setLogotypeClair();
            } else {
                setNavbarShrink(true);
                setLogotypeFonce();
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Le tableau vide [] signifie que cet effet ne s'exécutera qu'une seule fois après le rendu initial du composant


    return (
        <div className="nav-container">
            <nav className={navbarShrink ? 'navbar navbar-shrink navbar-expand-lg fixed-top py-3' : 'navbar navbar-expand-lg fixed-top py-3' } id="mainNav">
                <div className="container px-0 ">
                    <a className="navbar-brand" href="#page-top"> <img src={logotype} id="logotype" alt="logotype" height={40}/> </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#ageTimer"> Earth's birthday</a></li>
                            <li className="nav-item"><a className="nav-link" href="#potd">Picture of the day</a></li>
                            <li className="nav-item"><a className="nav-link" href="#asteroidCount"> Asteroid count</a></li>
                            <li className="nav-item"><a className="nav-link" href="#asteroidInfos"> Nearest asteroids Infos</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;