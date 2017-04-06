// Import MySQL connection.
var connection = require("../config/connection.js");

// TO DO LIST
// selectAll()
// insertOne()
// updateOne()

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var tableName = "burgers"

// Object for all our SQL statement functions.
var orm = {
	 // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(callback) {
    // console.log("selectAll function from orm.js" + callback);
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },
  	insertOne: function(table, cols, vals, callback) {
    	var queryString = "INSERT INTO " + table;

    	queryString += " (";
      queryString += cols;
      queryString += ") ";
      queryString += "VALUES (?)";
    	// queryString += vals;
    	// queryString += ") ";

    	console.log(queryString);

    	connection.query(queryString, vals, function(err, result) {
      		if (err) {
        	throw err;
      		}
      	callback(result);
    	});
  	},
    
  	updateOne: function(table, objColVals, condition, callback) {
    	var queryString = "UPDATE " + table;

    	queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
    	queryString += condition;

    	console.log(queryString);
    	connection.query(queryString, function(err, result) {
      		if (err) {
        	throw err;
      	}

      	callback(result);
    	});
  	}
}

// Export the orm object for the model.
module.exports = orm;