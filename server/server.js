const express = require('express');
const app = express();
const cors = require('cors');
const {response} = require("express");

app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const API_KEY = 'idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt';

/*
 MongoDb Client
 */

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://luptilu.fr:27017';
const dbName = 'spacey';
const client = new MongoClient(url, { useNewUrlParser: true });

function connect() {
    return new Promise((resolve, reject) => {
        client.connect(err => {
            if (err) {
                reject(err);
            } else {
                console.log('Connected successfully to server');
                const db = client.db(dbName);
                resolve(db);
            }
        });
    });
}

const db = client.db(dbName);
const collection = db.collection('spacey');

app.get('/test', (req, res) => {
    const document = collection.find({});
    res.send(document.test);
});

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

app.get('/potd/fakeAnswers', (req, res) => {
    //random number between 0 and 50
    let start = Math.floor(Math.random() * 50);
    let startdate = new Date();
    startdate.setDate(startdate.getDate() - start);
    let enddate = new Date();
    enddate.setDate(startdate.getDate() + 3);

    let request = 'https://api.nasa.gov/planetary/apod?start_date='
        + startdate.toISOString().split('T')[0] + '&end_date='
        + enddate.toISOString().split('T')[0] + '&api_key='
        + API_KEY;

    fetch(request)
        .then(response => response.json())
        .then(data => {
            let titles = [];
            for (let i = 0; i < data.length; i++) {
                titles.push(data[i].title);
            }
            res.send(titles);
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
                hdurl: data.hdurl,
            }
            res.send(newData);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error fetching data from NASA API');
        });
});

app.get('/asteroids/counter', (req, res) => {
    let request = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=" + API_KEY;
    fetch(request)
        .then(response => response.json())
        .then(data => {
            res.send(data.total_elements.toString());
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error fetching data from NASA API');
        });
});

app.get('/asteroids', (req, res) => {
    let request = "https://api.nasa.gov/neo/rest/v1/feed?detailed=true&api_key=" + API_KEY;
    fetch(request)
        .then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error fetching data from NASA API');
        });
});