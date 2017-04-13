var path = require("path");
var db = require("../models");
var moment = require("moment");

var session;
 
var handlebarHelpers = 
          {
            inc: function (index) { 
              return parseInt(index) + 1; 
            },

            dateFormat: function(date) {
              return moment.utc(date).format("LL");
            },
            
            timeFormat: function(time) {
              return moment(time, "HH:mm:ss").format("LT");
            },

            dateTimeFormat: function(dateTime) {
              return moment(dateTime).format("ll, LT");
            }
          };
// Routes
// =============================================================
module.exports = function(app) {
  
  app.get("/", function(req, res) {

    db.Burger.findAll({})
    
    .then(function(data) {
      console.log("data; " + data);
      res.render("index", {
        burger: data
      });
    });
  });
};

// module.exports = function(app) {

//  app.get("/", function(req, res) {
  
//   db.Burger.findAll(function(data) {
//     var hbsObject = {
//       burgers: data,
//     })
//     // console.log("handlebars object: " + hbsObject);
//     .then(function(data){
//     res.render("index", hbsObject);
//     });
//   }
//  });

// };