import React, {useEffect, useState} from 'react'

function Earth() {
    const [img, setImg] = useState('');

    useEffect(() => {
        fetch('https://spacey.luptilu.fr/api/earth/picture')
            .then(response => response.text())
            .then(data => setImg(data));
    }, []);


    return (
        <div className="earth-container">
            <img src={img} className="earth" alt="Earth"/>
            <div className="gradient"></div>
        </div>
    )
}

export default Earth;