const PORT = process.env.PORT || 5000;

const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '/public')));

server.listen(PORT, function(){
	console.log(path.join('Port: ', String(PORT)));
});