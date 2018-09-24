// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err) {
//         return console.log('Cannot connect to the database server');
//     }
//     console.log('Connected to MongoDB server');

//     db.collection('Todos').find().count().then((count) => {
//         console.log(`Todos count: ${count}`);
//         // console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to fetch todos', err);
//     });

//     // db.close();
// });


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Cannot connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').find({name: 'Aquamarina'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the data', err);
    });

    db.collection('Users').find({name: 'Aquamarina'}).count().then((count) => {
        console.log(`The number of users with those parameters is: ${count}`);
    }, (err) => {
        console.log('Unable to fetch the data', err);
    });
});