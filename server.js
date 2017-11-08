const s = require("express");
const hbs = require("hbs");

const port = process.env.port || 3000;
var app = s();

app.set("view engine", "hbs");
app.use(s.static(__dirname + '/public'));

app.get("/", (req, res) => {

  //res.send("Hello express");
  res.render("home.hbs", {
    project_name: "Blockchain"
  });

});


app.get("/todos", (req, res) => {

  res.send({
    title: "Go to dentist",
    completed: false
  });
});


app.post("/todos", (req, res) => {

  //console.log(req);
  res.send("Saved to database");
});

app.get("/about", (req, res) => {

  //res.send("About page ... ");
  res.render("about.hbs", {
    username: "Vikas",
    age: 31,
    address: "17042 Aggarwal Colony Bathinda"
  });
});

app.listen(port);
