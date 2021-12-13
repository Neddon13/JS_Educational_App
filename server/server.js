const express = require('express');
const app = express();
// const MongoClient = require('mongodb').MongoClient;
// const createRouter = require('./helpers/create_router.js');
// const cors = require('cors');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017',
{useUnifiedTopology: true})
.then((client) => {
    const db = client.db('countries_api');
    const countriesCollection = db.collection('countries');
    const countriesRouter = createRouter(countriesCollection);
    app.use('/api/countries', countriesRouter);
})
.catch(console.error);

app.use(express.json());

app.listen(5000, function () {
  console.log(`Listening on port 5000`);
});