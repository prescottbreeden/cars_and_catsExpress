var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/bower_components'));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('main');
})

app.get('/cars', function(req, res) {
    res.render('cars');
})

app.get('/cats', function(req, res) {
    res.render('cats');
})

app.get('/cars/new', function(req, res) {
    res.render('newcar');
})

app.get('/cats/:cat_id', function(req, res) {
    var id = req.params.cat_id
    var imgString = "../images/cat" + id + ".jpg"
    var cat_data = [
        {
            name: "Buttons", 
            age: 2,
            favoriteFood: "paint chips",
            favoriteToys: ["mouse", "string", "ball"]
        },
        {
            name: "Sockets",
            age: 10,
            favoriteFood: "Lasagna",
            favoriteToys: ["your shoes", "your chair"]
        },
        {
            name: "Bootstrap",
            age: 4,
            favoriteFood: "Catnip",
            favoriteToys: ["catnip", "catnip", "catnip", "more catnip"]
        },
        {
            name: "Session.Flush()",
            age: 6,
            favoriteFood: "User Ids",
            favoriteToys: ["users", "registrations", "validations"]
        }
    ]
    res.render('details', {cats : cat_data, id, imgString});
})
app.get("/test/:id", function (req, res) {
    res.send(`id is ${req.params.id}`)
})

app.get("/users", function (req, res){
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})


app.listen(8000, function() {
    console.log("Power Overwhelming...");
})