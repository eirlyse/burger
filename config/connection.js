// Requiring mysql package
var mysql = require("mysql");

// Setting up our connection information
var source = {
  localhost: {
    host: "localhost",
    port: 8080,
    user: "root",
    password: "password123",
    database: "burgers_db"
  }
};


// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
