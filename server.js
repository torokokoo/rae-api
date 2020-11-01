const http = require("http");
const scraper = require("./scraper.js")

const server = http.createServer((req, res) => {
    if(req.url != '/favicon.ico'){
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(scraper(req.url)));
    };    
});

server.listen(8080, 'localhost', () => {
    console.log("Listening");
});