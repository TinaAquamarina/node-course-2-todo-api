// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Cannot connect to the database server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5ba94710bc37f29e4443211d')}, 
    // {$set: {
    //     completed: true
    // }}, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5ba92eeebc37f29e44431d73")}, {
        $set: {
            name: 'Irma'
        }
    }, {
        $inc: {
            age: 1
        }
    }, {
            returnOriginal: false
        })
        .then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });

    // db.close();
});
