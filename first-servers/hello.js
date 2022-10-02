const http = require("http");

const host = 'localhost';
const port = 3000;

let g = {
    a1: 5,
    a2: 6,
    a3: 7,
};
g = JSON.stringify(g);
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    // res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`${g}`);
    // res.end(`{"message": "This is a JSON response"}`);
    // res.end(`My first server!${ghj}`);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
