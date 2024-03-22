import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navigation from "./components/Navigation";
import AgeTimer from "./components/AgeTimer";
import Home from "./components/Home";
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
        <Home/>
        <AgeTimer/>
        <POTD/>
        <AsteroidCounter/>
        <NearAsteroid/>
    </React.StrictMode>
);

reportWebVitals();
