const server = require('./src/server');

const PORT = 8001;

server.listen(PORT, ()=> {
    console.log(`Server Characters listening on port ${PORT}`);
});