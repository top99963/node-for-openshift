const http = require('http')
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server fuck k!')
}

const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })



 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});