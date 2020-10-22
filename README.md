# ExpressNoteTaker

### PROJECT DESCRIPTION:

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

### ACCEPTANCE CRITERIA/REQUIREMENTS:

* Application should allow users to create and save notes.
* Application should allow users to view previously saved notes.
* Application should allow users to delete previously saved notes.
* HTML routes: 
    * GET `/notes` (`notes.html` file)
    * GET `*` (`index.html` file)
* API routes: 
    * GET `/api/notes` (`db.json` file and saved notes)
    * POST `/api/notes` (save new note on body, add to `db.json` file, return to client)
    * DELETE `/api/notes/:id` (delete note by id query parameter)
* Deploy app on Heroki

### DEVELOPMENT PLAN:

* Create server.js using Express
* Link GET & POST reqs to HTML files
* Use `fs` to retrieve (GET), parse, and write (POST) new notes to JSON file
* 


### COMMITS:

* Initial commit - created repo, .gitignore, README.md, Develop, db and public folders, added provided html, css and index.js files, npm install, and initial server.js updates
*


### SUBMISSION REQUIREMENTS:



### HEROKU URL:


### GIThUB URL:
