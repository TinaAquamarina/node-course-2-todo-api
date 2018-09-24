// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Cannot connect to the database server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat pizza'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat pizza'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteOne({name: 'Aquamarina'}).then((results) => {
    //     console.log(results)
    // });

    // db.collection('Users').deleteMany({name: 'Aquamarina'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: ObjectID("5ba92f03bc37f29e44431d7b")}).then((result) => {
        console.log(result);
    });

    // db.close();
});
