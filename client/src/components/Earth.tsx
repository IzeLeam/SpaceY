import React from 'react'

function Earth() {
    return (
        <div className="earth-container">
            <img src={require('../assets/epic_1b_20190530011359.png')} className="earth" alt="Earth"/>
            <div className="gradient"></div>
        </div>
    )
}

export default Earth;