const app = require('./app');
const http = require('http');
const https = require('https');
const {s_port,h_port}  = require('./config');

const fs = require('fs');

const options = {
  key: fs.readFileSync('ssl/sly-key.pem'),
  cert: fs.readFileSync('ssl/sly-cert.pem')
};


http.createServer(app).listen(h_port,()=>{
  console.log("HTTP is running on port 8080!")
})
https.createServer(options,app).listen(s_port,()=>{
  console.log("HTTPS is running on port 443!")
})