var mgoose = require('mongoose');
var {userList} = require('./models/user.js');

mgoose.connect("mongodb://localhost:27017/TodoApp");

  var newUser = new userList({
    name: 'Vineetji2',
    age: "271",
    location: "Gurgaon"
  });

  newUser.save().then((doc) => {

    console.log("Saved .. " + doc);

  })
