import React from 'react'
import '../styles/Navigation.css';
import '../js/Navigation.js';

function Navigation() {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg fixed-top py-3" id="mainNav">
                <div className="container px-0 ">
                    <a className="navbar-brand" href="#page-top">Space Y</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#ageTimer"> Earth's birthday count</a></li>
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