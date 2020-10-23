var path = require("path");

// Routing
module.exports = function(app) {
  // GET Requests
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Link to css file.
  app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/styles.css"));
  });

  // If no matching route is found default to home page.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};