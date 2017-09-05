//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();

//console.log(obj);

//object de-structuring es6
var user = {name:'Prasanna',age:38};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

 //deleteMany
 // db.collection('users').deleteMany({name: 'Prasanna'}).then((result) => {
 //   console.log(result);
 // });
//  //deleteOne
// db.collection('todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// })
 //findOneAndDelete
// db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// })
db.collection('users').findOneAndDelete({_id: new ObjectID("59ae615a4a6b250708381258")}).then((result) => {
  console.log(result);
})
  //db.close();
})
