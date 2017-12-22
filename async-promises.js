var users = [{
    id: 1,
    name: "vikas",
    age: 30,
    score: 11
},
{
    id: 2,
    name: "Rahul",
    age: 30,
    score: 12
},
{
    id: 3,
    name: "vikas2",
    age: 302,
    score: 715
}
];
var grades = [{
  id: 11,
  math:78,
  english: 85
}, {
  id: 12,
  math:87,
  english: 55
}];

var getUser = (id) => {

  var p = new Promise((resolve, reject) => {
    var user = users.find((user) => user.id === id);
    if(user) {
      resolve(user);
    } else {
      reject("Unable to get");
    }
  })
  return p;
}


getUser(1).then((u) => {
    console.log(u);
}).catch((err) => {

    console.log("Unable to get user ... ");
})
