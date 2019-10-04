// code away!
require('dotenv').config()
const server = require('./server');


// const defaults = require('./config/defaults');

const port = process.env.PORT;

// server.listen(defaults.port, () => 
//     console.log(`\n** API Ruuning on ${defaults.port} **\n`))
// var server = app.listen(process.env.PORT || 5000, function () {
//  var port = server.address().port;
//  console.log("Express is working on port " + port);
// });

server.listen(port, () => 
console.log(`\n** API Ruuning on ${port} **\n`))    