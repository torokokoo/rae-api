const http = require("http");
const scraper = require("./scraper.js")

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.statusCode = 200;
        res.end("\n\Para utilizar la API por favor ingresa la palabra al lado del dominio, asi: dominio.com/<palabra>\n\
        Esto te retornara la primera definicion asignada a aquella palabra\n\
        Para cualquier duda, puedes preguntarme a traves de Discord https://discord.gg/2Tw8aUV o en diego@torokoko.cl");
    };
    if(req.url != '/favicon.ico' && req.url != '/'){
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        i = scraper(req.url);
        i.then(response => res.end(JSON.stringify(response)));
    };
});

server.listen(8080, 'localhost', () => {
    console.log("Listening");
});