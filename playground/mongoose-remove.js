const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => { //not returning doc
//     console.log(result);
// });

// Todo.findOneAndRemove - returning doc
// Todo.findByIdAndRemove - returning doc

// Todo.findByIdAndRemove('5baccad0ffef9867f43df6b0').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({_id: '5baccb3effef9867f43df6cc'}).then((todo) => {
    console.log(todo);
});