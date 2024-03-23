const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://luptilu.fr:27017';
const dbName = 'spacey';
const client = new MongoClient(url);

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

export default connect;