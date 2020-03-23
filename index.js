var express = require("express");
var app = express();
var server = require('http').createServer(app);
const io = require('socket.io')(server);
app.set('views', './tpl');
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);
app.use(express.static('public', {'chat': ['chat.js', 'chat.j']}));

var port = 3700;
server.listen(port);
console.log("listening on port " + port);


app.get('/', function(req, res){
  res.render("page");
  console.log("we out here"); //checking it does this step
});



io.on('connection', function(socket) {
  socket.emit('message', {message: 'Welcome to da chat'});
  socket.on('send', (data)=>{
    io.emit('message', data);
  });
});
