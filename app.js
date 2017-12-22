const s = require("express");
const hbs = require("hbs");

const port = process.env.PORT || 3000;
var app = s();


app.use(s.static(__dirname + '/public'));

app.get("/users", (req, res) => {

  res.send({

    title: "Go to dentist",
    completed: false

  });
});


app.post("/todos", (req, res) => {

  //console.log(req);
  res.send("Saved to database");
});



app.listen(port, () => {

  console.log(`Server is up at ${port}`);

});
