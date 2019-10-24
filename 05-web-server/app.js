const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type': 'application/json'});
  let resp = {
    name: 'pabtab',
    age: 26
  }

  res.write(JSON.stringify(resp))
  res.end();

})
.listen(8080)

console.log('listening port 8080')