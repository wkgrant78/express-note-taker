// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const express = require("express");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs
app.use(express.static("public"));

require("./routes/api")(app);
require("./routes/html")(app);

// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});