import React, {useEffect, useState} from "react";
import '../styles/POTD.css';
import {wait} from "@testing-library/user-event/dist/utils";

function POTD() {

    let goodAnswer = "undefined"
    let guessed = false;

    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');

    async function fetchData() {
        const response = await fetch('http://localhost:5000/potd');
        const data = await response.json()
        setImg(data.hdurl);
        setDescription(data.explanation);
        goodAnswer = data.title;

        const buttons = document.querySelectorAll('.options button');
        const randomIndex = Math.floor(Math.random() * 4);
        buttons[randomIndex].textContent = goodAnswer;
        let i = 0;
        for (let j = 0; j < 4; j++) {
            if (j === randomIndex) continue;
            buttons[j].textContent = "test";
            i++;
        }
    }

    useEffect(() => {
        fetchData();

        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (guessed) return;
                guessed = true;

                const descriptionContainer = document.querySelector('.description');
                if (descriptionContainer) {
                    descriptionContainer.classList.add('visible')
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
    }, []);


    return (
        <div className="potd-container" id="potd">
            <img className="potd" src={img} alt="Earth"/>
            <p className="description">{description}</p>
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