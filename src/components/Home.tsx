import React from "react";
import Title from "./Title";
import Earth from "./Earth";
import '../styles/Home.css';

function Home() {
    return (
        <>
            <div className="home-container">
                <Title />
                <Earth />
            </div>
        </>
    )
}

export default Home;