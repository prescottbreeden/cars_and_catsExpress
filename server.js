var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
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

app.get('cars/new', function(req, res) {
    res.render('newcar');
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