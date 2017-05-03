var Hapi = require('hapi');
 
var server = new Hapi.Server();
 

server.connection({host:'localhost',port: 3007});
 

server.route({
 
method: 'GET',
 
path: '/',
 
handler:function(request,response){
 
response('Good Morning Team');
 
}
 
});
 

server.start(function(){
 
console.log('Catch action at ' + server.info.uri);
 
});