import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/**
 * The following components are imported from the components' folder.
 */
import Title from "./components/Title";
import Navigation from "./components/Navigation";
import AgeTimer from "./components/AgeTimer";
import Earth from "./components/Earth";
import POTD from "./components/POTD";
import AsteroidCounter from "./components/AsteroidCounter";
import NearAsteroid from "./components/NearAsteroid";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Navigation/>
        <Title/>
        <Earth/>
        <AgeTimer/>
        <POTD/>
        <AsteroidCounter/>
        <NearAsteroid/>
    </React.StrictMode>
);

reportWebVitals();
