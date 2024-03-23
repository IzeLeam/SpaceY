import React, {useEffect, useState} from "react";
import '../styles/POTD.css';

function POTD() {

    let goodAnswer = "undefined"
    let guessed = false;

    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');

    async function fetchData() {
        const response = await fetch('https://spacey.luptilu.fr/api/potd');
        const data = await response.json()
        setImg(data.hdurl);
        setDescription(data.explanation);
        goodAnswer = data.title;

        const fakeAnswers = await fetch('https://spacey.luptilu.fr/api/potd/fakeAnswers');
        const fakeTitles = await fakeAnswers.json();


        const buttons = document.querySelectorAll('.options button');
        const randomIndex = Math.floor(Math.random() * 4);
        buttons[randomIndex].textContent = goodAnswer;
        for (let i = 0; i < buttons.length; i++) {
            if (i !== randomIndex) {
                buttons[i].textContent = fakeTitles[i];
            }
        }
    }

    useEffect(() => {
        fetchData();

        const image = document.getElementById("img");

        if (image) {
            image.onmousemove = e => {
                const rect = image.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                image.style.setProperty('--px', `${x}px`);
                image.style.setProperty('--py', `${y}px`);
            }
        }

        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (guessed) return;
                guessed = true;

                const container = document.querySelector('.potd-container');
                if (container) {
                    container.classList.add('visible')
                }

                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].style.cursor = "default";
                    buttons[i].style.backgroundColor = "white";
                }
                const question = document.querySelector('.question');
                if (button.textContent === goodAnswer) {
                    button.style.backgroundColor = "#B2FF9D";
                    if (question) question.textContent = "Good answer !";
                } else {
                    if (question) question.textContent = "Wrong answer !";
                    button.style.backgroundColor = "#FF9D9D";
                    for (let i = 0; i < buttons.length; i++) {
                        if (buttons[i].textContent === goodAnswer) {
                            buttons[i].style.backgroundColor = "#B2FF9D";
                        }
                    }
                }
            });
        });
    });


    return (
        <div className="potd-container" id="potd">
            <img className="potd" id="img" src={img} alt="Earth"/>
            <p className="description">{description}</p>
            <div className="quiz">
                <h2 className="question">What do you see</h2>
                <div className="options">
                    <button>undefined</button>
                    <button>undefined</button>
                    <button>undefined</button>
                    <button>undefined</button>
                </div>
            </div>
        </div>
    )
}

export default POTD;