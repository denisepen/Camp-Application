var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/camp_app", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

// Schema setup

var campGroundSchema = new mongoose.Schema({
  name: String,
  image: String
})

var Campground = mongoose.model("Campground", campGroundSchema)

// Campground.create(
//   {
//     name: "Camp3: Forest",
//     image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//   }, function(err, campground) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Newly Created Campground: ");
//     console.log(campground);
//   }
//
// })

// var campgrounds = [
//   {
//     name: "Camp1: Beach1",
//     image: "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     name: "Camp2: Beach2",
//     image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     name: "Camp3: Forest",
//     image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//   }
// ]


app.get('/', function(req, res) {
  res.render("landing")
})

app.get('/campgrounds', function(req, res) {
// get all campgrounds from DB then render campgrounds
Campground.find({}, function(err, allCampgrounds) {
  if(err){
    console.log(err);
  } else {
    res.render("campgrounds", { camps: allCampgrounds})
  }
})
  // res.render("campgrounds", { camps: campgrounds})

});

app.post('/campgrounds', function(req, res) {
  // res.send("you hit the post route")
  var name = req.body.name
  var image = req.body.image
  var newCampground = {
    name: name,
    image: image
  }
// create a new campground and save to the db
  Campground.create(newCampground, function (err, newlyCreated) {
    if(err){
      console.log(err);
    } else {
      // redirect to campgrounds
      res.redirect('/campgrounds')
    }
  })
  // campgrounds.push(newCampground);

  // redirects to get request
});

app.get('/campgrounds/new', function(req, res) {
  res.render('new.ejs')
})

app.listen(3000, () => console.log("Welcome to The Camp App..."));
