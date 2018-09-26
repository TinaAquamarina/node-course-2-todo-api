const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5bab696f1b945fda049b5767';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({ //if it doesn't match anything, returns empty arr
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({ //if it doesn't match anything, returns null
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => { //if it doesn't match anything, returns null
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

// User.findById

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Id not found');
    } 
    console.log('User by Id', user)
}).catch((e) => console.log(e))

//query works, but no user (not found)

//user found (print res to the screen)

//error occured, invalid ID or whatever (catch err and print warning)
