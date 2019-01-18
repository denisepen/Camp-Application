var express = require('express');
var app = express();
var request = require('request');

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render("landing")
})

app.get('/campgrounds', function(req, res) {
  var campgrounds = [
    {
      name: "Camp1: Beach1",
      image: "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Camp2: Beach2",
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Camp3: Forest",
      image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ]

  res.render("campgrounds", { camps: campgrounds})
});


app.listen(3000, () => console.log("Welcome to The Camp App..."));
