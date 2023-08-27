const { verifyToken } = require("../Utils/JWTFunctions");

const isAuthenticated = (req, res, next) => {

  const token = req.headers.authorization.split(' ')[1]

  // const token = req.headers.authorization


  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ messgae: "Invalid Token" });
  }

  console.log(("--token verified"));

  req.tokenDecode = decoded;
  next();
}

module.exports=isAuthenticated