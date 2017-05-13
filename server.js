var express = require("express");
var bodyParser = require("body-parser")
var methodOverride = require("method-override");


var port = process.env.port || 3003;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));

var path = require ('path');
app.use(express.static(path.join(__dirname + '.../public')));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

// app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
// app.set("view engine", "hbs");

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


app.listen(port);
