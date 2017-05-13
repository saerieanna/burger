// Inside the burgers_controller.js file, import the following:
// Express
var express = require("express");
// burger.js
var burgers = require("../models/burger.js");
// Create the router for the app
var router = express.Router();


router.get("/", function(req, res) {
    res.redirect("/burgers")
});

router.get("/burgers", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
})



router.post("/burgers/create", function(req, res) {
    burgers.create([
        'burger_name'],[req.body.burger_name], function(data) {
         res.redirect("/burgers")
    });
});

router.put("/burgers/update/:id", function(req, res) {
           var condition = 'id = ' + req.params.id;
           console.log('condition ', condition);
           burgers.update({'devoured': req.body.devoured}, condition, function(data) {
            res.redirect("/burgers");
           });
         });



            // export the router at the end of your file.
            module.exports = router;
