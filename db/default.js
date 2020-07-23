const { MongoClient } = require('mongodb');

const DB_NAME = 'merncrud';
const COLLECTION_NAME = 'animals';
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });
const animalSchema = require('./animalSchema');
module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to Mongo');
        const db = connection.db(DB_NAME, animalSchema);
        this[COLLECTION_NAME] = db.collection(COLLECTION_NAME);
    },
    disconnect () {
        return client.close();
    },
};
