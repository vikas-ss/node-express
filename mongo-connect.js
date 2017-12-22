const m = require("mongodb").MongoClient;

m.connect("mongodb://localhost:27017/TodoApp", (err, db) => {

  if(err) {
    console.log("Some error occured .. ");
  }

// db.collection('todos').insertOne({
//   title: "Complete node tutorial",
//   completed: false
// }, (err, result) => {
//
//   if(err) {
//       console.log("Error occured while inserting .. ");
//   }
//
//   console.log(" Inserted .. ");
//
// });

db.collection('Users').insertOne({
  name: "Vikas",
  age: 31,
  location: "Bathinda"
}, (err, result) => {

  if(err) {
      console.log("Error occured while inserting .. ");
  }

  console.log(" Inserted .. ");

});

// 7087294136

  console.log("connected ... ");
  db.close();
});
