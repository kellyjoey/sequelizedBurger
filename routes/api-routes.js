// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    
    db.Burger.findAll({
      
    }).then(function(dbBurger) {
    	console.log(dbBurger);
      res.redirect('/');
    });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
    	burger_name: req.body.burger_name

    })

    .then(function(result) {
      res.redirect('/');
    });
  });

// PUT route to update checkedIn players in table
    app.put("/api/burgers", function(req, res) {
        db.Burger.update(
          {
            devoured: 1
          },
          {
            where: {
              id: req.body.BurgerId,
            }
          }).then(function(data) {
            res.json("api-routes burger updated");
          });
    });
};
