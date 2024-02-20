import React, {useEffect} from "react";
import '../styles/POTD.css';

function POTD() {

    const goodAnswer = "Earth"
    let guessed = false;

    useEffect(() => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (guessed) return;
                guessed = true;

                //Remove effect on all buttons
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
            <img className="potd" src={require('../assets/epic_1b_20190530011359.png')} alt="Earth"/>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis felis id tortor scelerisque pellentesque eu vitae metus. Duis tincidunt, nisi sit amet maximus facilisis, ipsum ligula sollicitudin lorem, ac condimentum dui eros in ligula. Morbi laoreet quis est nec consectetur. Sed turpis ex, tristique sed justo id, efficitur suscipit enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur neque ante, efficitur in massa sed, efficitur porttitor tellus. Suspendisse vitae turpis eget ante maximus venenatis. Nunc quam nisi, hendrerit non neque id, dapibus malesuada eros. Donec at ullamcorper sapien, ac rhoncus magna. Proin egestas eget dolor a tempor. Duis suscipit, orci sed fringilla faucibus, ex neque vestibulum magna, eu tincidunt nunc dui vitae massa. Integer at tristique leo. Donec porta nunc id massa dictum, vel rhoncus justo aliquam. Aliquam nulla odio, accumsan rutrum finibus vel, molestie vel neque. Sed feugiat leo nisl, at iaculis augue faucibus sit amet. Fusce dolor erat, vestibulum sed mollis sed, lacinia pulvinar ex.
            </p>
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