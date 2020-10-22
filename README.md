# ExpressNoteTaker

### PROJECT DESCRIPTION:

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

### ACCEPTANCE CRITERIA/REQUIREMENTS:

* Application should allow users to create and save notes, view and delete previously saved notes.
* HTML routes: 
    * GET `/notes` (`notes.html` file)
    * GET `*` (`index.html` file)
* API routes: 
    * GET `/api/notes` (`db.json` file and saved notes)
    * POST `/api/notes` (save new note on body, add to `db.json` file, return to client)
    * DELETE `/api/notes/:id` (delete note by id query parameter)
* Deploy app on Heroki

### DEVELOPMENT PLAN:

* Install npm and create main folders, import provided files
* Server.js - create "express" server, setup port, data parsing, static route and start server
* Use `fs` for POST, GET, and DELETE methods to write/retrieve from JSON file
* Link htmls to GET/POST requests
* Routes - create URL call to api and html for GET, POST, DELETE requests, need data.js file to store user inputs

### COMMITS:

* Initial commit - created repo, .gitignore, README.md, installed npm
* Develop initial server.js, import provided files/folders
* Create journalData.js to store user inputs, updated README


### SUBMISSION REQUIREMENTS:



### HEROKU URL:



### GIThUB URL:

https://github.com/wkgrant78/ExpressNoteTaker.git

