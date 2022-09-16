const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '/public')));

server.listen(process.env.MY_PORT, function(){
	console.log(path.join('Port: ', process.env.MY_PORT));
});