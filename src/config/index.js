const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT,
  h_port: process.env.H_PORT,
  s_port: process.env.S_PORT,
  mongoUrl:process.env.MONGO_URL
};