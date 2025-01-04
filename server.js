const http = require('http');

const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res)=>{
    console.log('new connection');
    res.end("Hello form server on PORT: " + PORT + " now with cloud build via gcloud cli")
})


server.listen(PORT, ()=> console.log('listening on PORT: ' + PORT));

