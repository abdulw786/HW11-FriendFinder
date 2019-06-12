// Node Dependencies
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

// Link in html and api routes
let apiRoutes = require('./app/routing/api-routes.js');
let htmlRoutes = require('./app/routing/html-routes.js');

// Set up Express App
let app = express();
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Server Routing Map 
apiRoutes(app); // API route - Must be listed first due to the HTML default catch all "use" route
htmlRoutes(app); // HTML route 

// Listener - Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});