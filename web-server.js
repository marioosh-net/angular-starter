var http = require('http');
var ecstatic = require('ecstatic');
var port = process.env.PORT || 8080;
http.createServer(
    ecstatic({ root: __dirname + '/app' })
)
.on('request',function(s){
  console.log(s.method + ' ' +s.url);
  // console.log(s.headers);
})
.listen(port);
console.log('Listening on :'+port);