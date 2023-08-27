require('dotenv').config()
const JWT = require("jsonwebtoken");

const { sign, verify } = JWT;

const secretKey = process.env.JWT_SECRET_KEY;

function generateToken(payload) {
  return sign(payload, secretKey, { expiresIn: "1h" });
}

function verifyToken(token) {
  try {
    console.log(verify(token, secretKey));
    return verify(token, secretKey)
  } catch (error) {
    console.log("-----error:"+error);
    return null;
  }
}

module.exports = { generateToken, verifyToken };
