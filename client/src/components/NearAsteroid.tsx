import React, {DetailedHTMLProps, useEffect, useState} from "react";
import '../styles/Nearest.css';

function NearAsteroid() {

    useEffect(() => {
        let carousel = document.getElementsByClassName("carousel")[0],
            slider = carousel.getElementsByClassName("carousel__slider")[0] as HTMLElement,
            items = carousel.getElementsByClassName("carousel__slider__item") as HTMLCollectionOf<HTMLElement>,
            prevBtn = carousel.getElementsByClassName("carousel__prev")[0],
            nextBtn = carousel.getElementsByClassName("carousel__next")[0];

        let width: number,
            height,
            totalWidth,
            margin = 20,
            currIndex = 0,
            interval: NodeJS.Timer,
            intervalTime = 5000;

        function format_date(date: string) {
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            let date_obj = new Date(date);
            let day = date_obj.getDate();
            let month = months[date_obj.getMonth()];
            let year = date_obj.getFullYear();
            let hours = date_obj.getHours();
            let minutes = date_obj.getMinutes();

            return `${month} ${day}, ${year} at ${hours}:${minutes}`;
        }

        async function getAsteroidsData() {
            const response = await fetch('https://spacey.luptilu.fr/api/asteroids');
            let data = await response.json();
            let near_objects = data.near_earth_objects;
            let dates = Object.keys(near_objects);
            for (let i in dates) {
                let asteroids = near_objects[dates[i]];
                for (let j in asteroids) {
                    let name = asteroids[j].name.match(/\(([^)]+)\)/)[1];

                    let diameter = asteroids[j].estimated_diameter.kilometers.estimated_diameter_min;
                    diameter = Math.round(diameter * 100) / 100;

                    let close_approach_data = asteroids[j].close_approach_data[0];
                    let close_approach_date = close_approach_data.close_approach_date_full;
                    let formatted_date = format_date(close_approach_date);

                    let speed = close_approach_data.relative_velocity.kilometers_per_hour;
                    speed = Math.round(speed * 100) / 100;

                    let distance = close_approach_data.miss_distance.kilometers;
                    distance = Math.round(distance * 100) / 100;

                    let isDangerous = asteroids[j].is_potentially_hazardous_asteroid;

                    slider.innerHTML += `
                    <div class="carousel__slider__item">
                        <div class="item__3d-frame">
                            <div class="item__3d-frame__box item__3d-frame__box--front">
                                <h2>${name}</h2>
                                <h3>Size</h3>
                                <p>${diameter} m</p>
                                <h3>Distance from Earth</h3>
                                <p>${distance} km</p>
                                <h3>Speed</h3>
                                <p>${speed} km/h</p>
                                <h3>Close Approach Date</h3>
                                <p>${formatted_date}</p>
                                <h3>${isDangerous ? "Potentially dangerous" : "Not dangerous"}</h3>
                            </div>
                        </div>
                    </div>
                `;
                }
            }
        }

        function init() {
            getAsteroidsData().then(() => {
                items = carousel.getElementsByClassName("carousel__slider__item") as HTMLCollectionOf<HTMLElement>;
                resize();
                move(Math.floor(items.length / 2));
                timer(0);
                }
            )
            bindEvents();
        }

        function resize() {
            width = Math.max(window.innerWidth * 0.25, 275);
            height = window.innerHeight * 0.5;
            totalWidth = width * items.length;

            slider.style.width = totalWidth + "px";

            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.style.width = width - margin * 2 + "px";
                item.style.height = height + "px";
            }
        }

        function move(index: number) {
            if (index < 1) index = items.length;
            if (index > items.length) index = 1;
            currIndex = index;

            for (let i = 0; i < items.length; i++) {
                let item = items[i],
                    box = item.getElementsByClassName("item__3d-frame")[0] as HTMLElement;
                if (i === index - 1) {
                    item.classList.add("carousel__slider__item--active");
                    box.style.transform = "perspective(1200px)";
                } else {
                    item.classList.remove("carousel__slider__item--active");
                    box.style.transform =
                        "perspective(1200px) rotateY(" + (i < index - 1 ? 40 : -40) + "deg)";
                }
            }

            slider.style.transform =
                "translate3d(" +
                (index * -width + width / 2 + window.innerWidth / 2) +
                "px, 0, 0)";
        }

        function timer(t: number) {
            let time = (t !== 0 ? t : intervalTime);
            clearInterval(interval);
            interval = setInterval(() => {
                move(++currIndex);
            }, time);
        }

        function prev() {
            move(--currIndex);
            timer(30000);
        }

        function next() {
            move(++currIndex);
            timer(30000);
        }

        function bindEvents() {
            window.onresize = resize;
            prevBtn.addEventListener("click", () => {
                prev();
            });
            nextBtn.addEventListener("click", () => {
                next();
            });
        }

        init();
    });

    return (
        <div id="asteroidInfos" className="carousel">
            <h1>NEAR ASTEROIDS</h1>
            <div className="carousel__body">
                <div className="carousel__prev"><i className="far fa-angle-left">&lt;</i></div>
                <div className="carousel__next"><i className="far fa-angle-right">&gt;</i></div>
                <div className="carousel__slider">
                </div>
            </div>
        </div>
    );
}

export default NearAsteroid;
