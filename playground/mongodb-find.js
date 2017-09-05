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

 // db.collection('Todos').find({_id: new ObjectID('5989783a8f9b3e0b64ef5719')}).toArray().then((docs) => {
 //   console.log('Todos');
 //   console.log(JSON.stringify(docs,undefined,2));
 // }, (err) => {
 //   console.log('unable to print todos',err);
 // })

 //   console.log(`Todos count: ${count}`);
 // }, (err) => {
 //   console.log('unable to print todos',err);
 // })

 db.collection('Users').find({name:'Shyam'}).toArray().then((docs) => {
   console.log('Users');
   console.log(JSON.stringify(docs,undefined,2));
 },(err) => {
   console.log()
 })

  //db.close();
})
