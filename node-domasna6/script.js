const http = require('http');
const url = require('url');
const fs = require("fs");



const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  if(url === "/home") {
    response.end('Home Page')
  } else if(url === "/home/imePrezimePol" && method === "GET") {
    response.end("Nikola Davkovski Masko")
  } else if(url === "/home/title" && method === "GET") {
    response.setHeader("Title", "Personal Information ")
    response.end("Title added")
  } else if(url === "/home/header" && method === "GET"){
    response.setHeader("X-Header", "Ova e Header!");
    response.end("Header added")
  } else {
    response.statusCode = 404
    response.end("Route not found")
  }
 
});

server.listen(3000)