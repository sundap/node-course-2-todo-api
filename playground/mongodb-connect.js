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

// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// },(err,result) => {
//   if(err){
//     return console.log('Unable to insert todo',err);
//   }
//
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
db.collection('Users').insertOne({
  name: 'Prasanna',
  age: 38,
  location: 'Auckland'
},(err,result) => {
  if(err){
    return console.log('unable to insert user',err);
  }
  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
});
  db.close();
})