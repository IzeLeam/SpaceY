const express = require('express');
const app = express();
const cors = require('cors');
const {response} = require("express");

app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const API_KEY = 'idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt';

app.get('/earth/picture', (req, res) => {
    let request = 'https://api.nasa.gov/EPIC/api/natural?api_key=' + API_KEY;
    fetch(request)
        .then(response => response.json())
        .then(data => {
            let identifier = data[0].identifier;
            let year = identifier.substring(0, 4);
            let month = identifier.substring(4, 6);
            let day = identifier.substring(6, 8);
            const imageUrl = 'https://api.nasa.gov/EPIC/archive/natural/' + year + '/' + month + '/' + day + '/png/' + data[0].image + '.png?api_key=' + API_KEY;
            res.send(imageUrl);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error fetching data from NASA API');
        });
});

app.get('/potd', (req, res) => {
    let request = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY;
    fetch(request)
        .then(response => response.json())
        .then(data => {
            let newData = {
                title: data.title,
                explanation: data.explanation,
                hdurl: data.hdurl
            }
            res.send(newData);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error fetching data from NASA API');
        });
});