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

// db.collection('todos').findOneAndUpdate({
//   _id: new ObjectID('59ae5d94baae69f525fea85f')
// },{
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: true
// }).then((result) => {
//   console.log(result);
// });

db.collection('users').findOneAndUpdate({
  _id: new ObjectID('59ae61291a34ee0db85a429e')
},{
  $set: {
    name: 'Prasanna'
  },
  $inc: {
    age: -1
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
})
});
  //db.close();
