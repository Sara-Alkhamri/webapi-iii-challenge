// code away!
require('dotenv').config()
const server = require('./server');


const defaults = require('./config/defaults');

// const port = 6000;

server.listen(defaults.port, () => 
    console.log(`\n** API Ruuning on ${defaults.port} **\n`))