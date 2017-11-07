const s = require("express");
const hbs = require("hbs");

var app = s();

app.set("view engine", "hbs");
app.use(s.static(__dirname + '/public'));

app.get("/", (req, res) => {

  //res.send("Hello express");
  res.render("home.hbs", {
    project_name: "Blockchain"
  });

});

app.get("/about", (req, res) => {

  //res.send("About page ... ");
  res.render("about.hbs", {
    username: "Vikas",
    age: 31,
    address: "17042 Aggarwal Colony Bathinda"
  });

});

app.listen(3000);
