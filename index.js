// code away!

const server = require('./server');

const port = 6000;
server.listen(6000, () => 
    console.log(`\n** API Ruuning on ${port} **\n`))