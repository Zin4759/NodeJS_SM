var http = require('http'),
  fs = require('fs');
// fs is a library that read file
fs.readFile('./test.html', function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(8000); //use port -> 8000/tcp
});
