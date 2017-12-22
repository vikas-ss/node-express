var mgoose = require('mongoose');

var userList = mgoose.model("users", {

  name: {
    type: String
  },
  age: {
    type: String
  },
  location: {
    type: String
  }
});

module.exports = {userList};
