//Install express server
const express = require('express');
const path = require('path');

const PasswordHashProgram = express();

// Serve only the static files form the dist directory
PasswordHashProgram.use(express.static(__dirname + '/dist'));

PasswordHashProgram.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/PasswordHashProgram/index.html'));
});

// Start the app by listening on the default Heroku port
PasswordHashProgram.listen(process.env.PORT || 8080);