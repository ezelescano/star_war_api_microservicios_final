const server = require('./src/server');

const PORT = 8002;

server.listen(PORT, () =>{
    console.log(`Server Films listening on port ${PORT}`)
})