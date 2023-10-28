const server = require('./src/server');

const PORT = 8004;

server.listen(PORT, () =>{
    console.log(`Server DataBase listening on port ${PORT}`);
})