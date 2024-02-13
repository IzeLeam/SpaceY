import React from "react";
import '../styles/POTD.css';

function POTD() {
    return (
        <div className="potd-container">
            <img className="potd" src={require('../assets/epic_1b_20190530011359.png')} alt="Earth"/>
            <div className="quiz">
                <h2 className="question">What do you see</h2>
                <div className="options">
                    <button>Earth</button>
                    <button>Mars</button>
                    <button>Venus</button>
                    <button>Mercury</button>
                </div>
            </div>
        </div>
    )
}

export default POTD;