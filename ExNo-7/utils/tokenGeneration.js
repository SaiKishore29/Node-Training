// import jwt from "jsonwebtoken";
// import {} from "dotenv/config";
const jwt=require('jsonwebtoken');
require('dotenv').config();
module.exports=function tokenGenerator(payload) {
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_DURATION,
  });
  return token;
}
