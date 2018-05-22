var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Ma page Node.js !</title>
    </head>
    <body>
     	<p>Bonjour <strong>Mr DRIDI</strong> !</p>
    </body>
</html>`);
    res.end();
});
server.listen(8080);